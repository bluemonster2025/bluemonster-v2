"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { backTexts, cards } from "./content";
import { Section } from "@/components/elements/Section";
import { Text, TextHighlight, Title } from "@/components/elements/Texts";

export default function Solutions() {
  const ref = useRef<HTMLDivElement | null>(null);

  const [isMd, setIsMd] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => setIsMd(e.matches);
    setIsMd(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !isMd) {
      setIsOpen(false);
      return;
    }

    let mounted = true;
    const io = new IntersectionObserver(
      (entries) => {
        if (!mounted) return;
        const entry = entries[0];
        const rect = entry.boundingClientRect;
        const vh = window.innerHeight || document.documentElement.clientHeight;
        const fullyVisible = rect.top >= 0 && rect.bottom <= vh;
        setIsOpen((prev) => (prev === fullyVisible ? prev : fullyVisible));
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    io.observe(el);
    return () => {
      mounted = false;
      io.disconnect();
    };
  }, [isMd, ref]);

  const CARD_W = 312;
  const CARD_H = 328;
  const GAP = 32;
  const count = cards.length;
  const containerWidth = count * CARD_W + (count - 1) * GAP;

  const cardVariants: Variants = {
    closed: (i: number) => {
      switch (i) {
        case 0:
          return {
            left: "35%",
            y: "-50%",
            rotate: 0,
            transition: { duration: 0.8, ease: [0.22, 0.8, 0.2, 1] },
          };
        case 1:
          return {
            left: "30%",
            y: "-50%",
            rotate: -20,
            transition: { duration: 0.8, ease: [0.22, 0.8, 0.2, 1] },
          };
        case 2:
          return {
            left: "42%",
            y: "-50%",
            rotate: 20,
            transition: { duration: 0.8, ease: [0.22, 0.8, 0.2, 1] },
          };
        default:
          return {
            left: "50%",
            y: "-50%",
            rotate: 0,
            transition: { duration: 0.8, ease: [0.22, 0.8, 0.2, 1] },
          };
      }
    },
    open: (i: number) => {
      switch (i) {
        case 0:
          return {
            x: "-348px",
            y: "-50%",
            rotate: 0,
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
          };
        case 1:
          return {
            left: "34%",
            x: "0px",
            y: "-50%",
            rotate: 0,
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
          };
        case 2:
          return {
            x: "258px",
            y: "-50%",
            rotate: 0,
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
          };
        default:
          return {
            x: "0px",
            y: "-50%",
            rotate: 0,
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
          };
      }
    },
  };

  return (
    <Section
      className="flex flex-col items-center justify-center pb-16"
      title="Bem vindo a bluemonster"
    >
      <div className="mb-22 text-center flex flex-col gap-4">
        <div>
          <Title as="h2" className="text-5xl">
            A melhor{" "}
            <TextHighlight textColor="text-purplescale-50">
              solução{" "}
            </TextHighlight>{" "}
            para o
          </Title>
        </div>
        <div>
          <Title as="h2" className="text-5xl">
            seu negócio!
          </Title>
        </div>
      </div>

      <div className="w-full flex items-center justify-center py-8">
        <div
          ref={ref}
          className="relative"
          style={{
            width: isMd ? `${containerWidth}px` : `${CARD_W}px`,
            height: `${CARD_H}px`,
          }}
        >
          {cards.map((title, i) => {
            return (
              <motion.div
                key={title + i}
                custom={i}
                initial="closed"
                animate={isMd ? (isOpen ? "open" : "closed") : "closed"}
                variants={cardVariants}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: `${CARD_W}px`,
                  height: `${CARD_H}px`,
                  zIndex: `${count - i}`,
                  perspective: "1000px",
                }}
                className="rounded-3xl shadow-cards cursor-pointer"
              >
                {/* flip container */}
                <div
                  className="relative w-full h-full transition-transform duration-500"
                  style={{ transformStyle: "preserve-3d" }}
                  onMouseEnter={(e) =>
                    isOpen &&
                    (e.currentTarget.style.transform = "rotateY(180deg)")
                  }
                  onMouseLeave={(e) =>
                    isOpen &&
                    (e.currentTarget.style.transform = "rotateY(0deg)")
                  }
                >
                  {/* front */}
                  <div
                    className="absolute w-full h-full flex items-center justify-center rounded-3xl bg-white border border-grayscale-25  [background-image:linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]
        bg-[length:40px_40px] shadow-cards"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <span className="text-2xl font-semibold text-grayscale-500">
                      {title}
                    </span>
                  </div>
                  {/* back */}
                  <div
                    className="absolute w-full h-full flex flex-col items-center justify-center rounded-3xl bg-purplescale-50 text-white p-6 text-center"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <Text className="text-2xl font-semibold mb-2 uppercase">
                      {backTexts[i].title}
                    </Text>
                    <Text className="text-sm font-semibold">
                      {backTexts[i].description}
                    </Text>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="relative flex justify-center">
        <svg
          className="absolute top-[-13rem]"
          width="777"
          height="292"
          viewBox="0 0 777 292"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="388.5"
            cy="388.5"
            r="364"
            stroke="#687AF6"
            strokeWidth="49"
          />
        </svg>
      </div>
    </Section>
  );
}
