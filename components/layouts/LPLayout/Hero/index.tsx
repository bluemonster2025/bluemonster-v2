"use client";

import Link from "next/link";
import Image from "next/image";
import { TextHighlight, Title } from "@/components/elements/Texts";
import { list_operations } from "./content";
import { useEffect, useState } from "react";
import { Section } from "@/components/elements/Section";
import { WhatsAppButton } from "@/components/elements/WhatsAppButton";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((prev) => prev + 1), 3000);
    return () => clearInterval(intervalId);
  }, []);

  // Configuração da animação do slider vertical
  const slideTransition = {
    type: "spring" as const,
    stiffness: 300,
    damping: 20,
    mass: 1,
  };

  return (
    <Section className="bg-gradient-to-b from-[#687AF6] to-[#3D4790] relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center">
      {/* Grid de fundo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center gap-20">
        {/* Logo e slogan */}
        <Link href="/" className="relative w-[200px] aspect-[4.65/1]">
          <Image
            fill
            alt="Blue Monster"
            src="/images/logos/logo-texto-branco.webp"
            style={{ objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Título */}
        <div className="flex flex-col gap-4">
          <Title className="text-white text-2xl">
            agência de desenvolvimento de
          </Title>

          <Title className="text-white uppercase font-medium text-[calc(1rem+4vw)] sm:text-5xl/[63px] lg:text-[64px]/[72px] pb-5 flex items-center justify-center">
            sites&nbsp;
            <TextHighlight
              textColor="text-greenscale-50"
              className="overflow-hidden h-[1.2em] inline-block"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={slideTransition}
                  className="inline-block"
                >
                  {list_operations[index % list_operations.length]}
                </motion.span>
              </AnimatePresence>
            </TextHighlight>
            &nbsp;e de alta performance.
          </Title>
        </div>

        {/* Botão WhatsApp */}
        <div className="w-full md:w-[215px] mx-auto">
          <WhatsAppButton
            title="Faça um orçamento"
            iconName="BsWhatsapp"
            iconColor="#282828"
          />
        </div>
      </div>
    </Section>
  );
}
