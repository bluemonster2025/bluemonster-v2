"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Image from "next/image";
import { backTexts, cards } from "./content";
import { Section } from "@/components/elements/Section";
import { Text, TextHighlight, Title } from "@/components/elements/Texts";

export default function Solutions() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [showHint] = useState(true);

  const [isMd, setIsMd] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => setIsMd(e.matches);
    setIsMd(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Keen slider apenas mobile
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1.25,
      spacing: 10,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 2.25,
          spacing: 0,
        },
      },
    },
  });

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
          return { left: "35%", y: "-50%", rotate: 0 };
        case 1:
          return { left: "30%", y: "-50%", rotate: -20 };
        case 2:
          return { left: "42%", y: "-50%", rotate: 20 };
        default:
          return { left: "50%", y: "-50%", rotate: 0 };
      }
    },
    open: (i: number) => {
      switch (i) {
        case 0:
          return { x: "-348px", y: "-50%", rotate: 0 };
        case 1:
          return { left: "34%", x: "0px", y: "-50%", rotate: 0 };
        case 2:
          return { x: "258px", y: "-50%", rotate: 0 };
        default:
          return { x: "0px", y: "-50%", rotate: 0 };
      }
    },
  };

  return (
    <>
      <Section
        className="flex flex-col items-center justify-center pb-16"
        title="Bem vindo a bluemonster"
      >
        {/* títulos */}
        <div className="mb-8 md:mb-22 text-center flex flex-col gap-4">
          <div className="hidden md:flex flex-col gap-4">
            <Title as="h2" className="text-4xl md:text-5xl">
              A melhor{" "}
              <TextHighlight textColor="text-purplescale-50">
                solução
              </TextHighlight>{" "}
              para o
            </Title>
            <Title as="h2" className="text-4xl md:text-5xl">
              seu negócio!
            </Title>
          </div>
          <div className="block md:hidden">
            <Title as="h2" className="text-4xl md:text-5xl mb-4">
              A melhor{" "}
              <TextHighlight textColor="text-purplescale-50">
                solução
              </TextHighlight>
            </Title>
            <Title as="h2" className="text-4xl md:text-5xl">
              para o seu negócio!
            </Title>
          </div>
        </div>

        {/* desktop cards animados */}
        <div className="hidden lg:flex w-full items-center justify-center py-8">
          <div
            ref={ref}
            className="relative"
            style={{
              width: isMd ? `${containerWidth}px` : `${CARD_W}px`,
              height: `${CARD_H}px`,
            }}
          >
            {cards.map((title, i) => (
              <motion.div
                key={title + i}
                custom={i}
                initial="closed"
                animate={isMd ? (isOpen ? "open" : "closed") : "closed"}
                variants={cardVariants}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: `${CARD_W}px`,
                  height: `${CARD_H}px`,
                  zIndex: `${count - i}`,
                  perspective: "1000px",
                }}
                className="group rounded-3xl shadow-cards cursor-pointer"
              >
                <div
                  className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:rotate-y-180"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className="absolute w-full h-full flex items-center justify-center rounded-3xl bg-white border border-grayscale-25 
                    [background-image:linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[length:40px_40px] shadow-cards"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <span className="text-2xl font-semibold text-grayscale-500">
                      {title}
                    </span>
                  </div>

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
            ))}
          </div>
        </div>
      </Section>

      {/* mobile carousel com flip individual + ícone animado de click */}
      <div className="block lg:hidden w-full py-8 pl-4 relative">
        {/* fundo azul à esquerda */}
        <div className="absolute left-0 top-[-1rem] bottom-[5rem] w-[256px] bg-[#687AF6] rounded-tr-[24px] rounded-br-[24px]" />

        <div ref={sliderRef} className="keen-slider relative">
          {cards.map((title, i) => {
            const isFlipped = flippedIndex === i;
            const handleClick = () => setFlippedIndex(isFlipped ? null : i);

            return (
              <div
                key={title + i}
                className="keen-slider__slide flex items-center justify-center relative"
              >
                <div
                  onClick={handleClick}
                  className={`relative w-[312px] aspect-[0.95/1] rounded-3xl shadow-cards cursor-pointer transition-transform duration-500 [transform-style:preserve-3d] ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
                >
                  {/* frente */}
                  <div
                    className="absolute w-full h-full flex items-center justify-center rounded-3xl bg-white border border-grayscale-25 
                    [background-image:linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]
                    bg-[length:35px_35px]"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <span className="text-2xl font-semibold text-grayscale-500">
                      {title}
                    </span>
                  </div>

                  {/* verso */}
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
              </div>
            );
          })}
        </div>

        {/* mãozinha fixa no primeiro card */}
        {showHint && (
          <motion.div
            animate={{
              y: [0, -8, 0],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[2rem] left-1/2 transform -translate-x-[2.5rem] w-[34px] aspect-[0.5/1] pointer-events-none z-50"
          >
            <Image
              src="/images/pictures/click-animate.webp"
              alt="Clique aqui"
              fill
              className="object-contain"
            />
          </motion.div>
        )}
      </div>
    </>
  );
}
