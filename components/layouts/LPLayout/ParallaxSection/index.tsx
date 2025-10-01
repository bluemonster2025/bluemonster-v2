"use client";

import { Section } from "@/components/elements/Section";
import clsx from "clsx";
import { ReactNode } from "react";

interface ParallaxSectionProps {
  background?: string; // cor ou imagem
  children: ReactNode;
  className?: string;
}

export default function ParallaxSection({
  background,
  children,
  className,
}: ParallaxSectionProps) {
  return (
    <Section
      className={clsx(
        "relative z-2 w-full flex items-center justify-center overflow-hidden bg-fixed bg-cover bg-center",
        background,
        className
      )}
    >
      {children}
    </Section>
  );
}
