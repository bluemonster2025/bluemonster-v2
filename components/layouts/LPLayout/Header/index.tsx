"use client";

import { useEffect, useState } from "react";
import { Section } from "@/components/elements/Section";
import Link from "next/link";
import Image from "next/image";
import { links } from "./context";
import { usePathname, useRouter } from "next/navigation";
import { WhatsAppButton } from "@/components/elements/WhatsAppButton";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [hash, setHash] = useState("");

  // Atualiza hash quando a URL muda
  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  // Scroll suave customizado
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(hash);
    if (!element) return;

    const headerOffset = window.innerWidth >= 1024 ? 96 : 88; // desktop / mobile
    const targetPosition =
      element.getBoundingClientRect().top + window.scrollY - headerOffset;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 800; // tempo em ms (quanto maior, mais lento)
    let startTime: number | null = null;

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutQuad(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hash]);

  const [scrollTopDistance, setScrollTopDistance] = useState(0);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const distance = window.pageYOffset;
      setScrollTopDistance(distance);
    };
    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpenMobileMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Section
      asTag="header"
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-[488px] h-[96px] lg:h-[51px] flex items-center justify-center z-50 bg-[#00000066] rounded-lg ${
        (scrollTopDistance > 30 || isOpenMobileMenu) &&
        "bg-grayscale-700 backdrop-blur-lg bg-opacity-60"
      }`}
    >
      <div className="flex w-full items-center justify-between px-4 gap-8">
        <Link
          href="/"
          className="relative w-[34px] aspect-square"
          onClick={() => setHash("")}
        >
          <Image
            fill
            alt="Blue Monster"
            src="/images/logos/brand.webp"
            style={{ objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Menu */}
        <nav className="flex gap-8 items-center">
          {links.map(({ href, label }) => {
            const [base, anchor] = href.split("#");

            let isActive = false;
            if (href === "/") {
              isActive = pathname === "/" && hash === "";
            } else if (anchor) {
              isActive = pathname === base && hash === `#${anchor}`;
            } else {
              isActive = pathname === base;
            }

            return (
              <Link
                key={href}
                href={href}
                onClick={(e) => {
                  if (anchor) {
                    e.preventDefault();
                    setHash(`#${anchor}`);
                    router.push(`${base}#${anchor}`);
                  } else {
                    setHash("");
                    router.push(base);
                  }
                }}
                className={`hidden md:block text-sm ${
                  isActive ? "font-bold" : "font-normal"
                } text-white`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <WhatsAppButton
          variant="icon"
          iconName="BsWhatsapp"
          iconColor="#0F0F0F"
        />
      </div>
    </Section>
  );
}
