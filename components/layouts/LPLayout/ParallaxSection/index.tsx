"use client";

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
    <>
      {" "}
      <section
        className={clsx(
          "relative z-2 w-full flex items-center justify-center overflow-hidden p-4",
          background,
          className
        )}
        style={{
          backgroundAttachment: "fixed", // efeito parallax básico
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {children}
      </section>
      {/* <Section
        className={clsx(
          "relative z-2 w-full flex md:hidden items-center justify-center overflow-hidden bg-cover bg-fixed bg-center",
          background,
          className
        )}
      >
        {children}
      </Section> */}
    </>
  );
}
