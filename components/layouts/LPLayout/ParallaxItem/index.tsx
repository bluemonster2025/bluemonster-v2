"use client";

import { useEffect, useState, useRef } from "react";
import { ReactNode } from "react";
import clsx from "clsx";

interface ParallaxItemProps {
  children: ReactNode;
  speed?: number; // 0.1 = lento, 0.5 = mais rápido
  className?: string;
}

export default function ParallaxItem({
  children,
  speed = 0.2,
  className,
}: ParallaxItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const section = ref.current.parentElement as HTMLElement;
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // só começa a mexer quando a section encosta no topo
      if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
        const progress = (scrollY - sectionTop) / sectionHeight;
        setOffset(progress * windowHeight * speed);
      } else {
        setOffset(0);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      className={clsx("relative will-change-transform", className)}
      style={{
        transform: `translateY(${offset}px)`,
      }}
    >
      {children}
    </div>
  );
}
