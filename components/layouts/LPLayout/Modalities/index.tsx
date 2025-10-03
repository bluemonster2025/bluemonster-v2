"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Section } from "@/components/elements/Section";
import { Text } from "@/components/elements/Texts";

const modalidades = [
  "SITE INSTITUCIONAL ",
  "CARDÁPIO DIGITAL",
  "E-COMMERCES",
  "LANDING PAGES",
  "BLOG",
];

const initialImages = [
  {
    id: "site",
    src: "/images/pictures/site-institucional.webp",
    alt: "Site Institucional",
  },
  {
    id: "cardapio",
    src: "/images/pictures/cardapio-digital.webp",
    alt: "Cardápio Digital",
  },

  {
    id: "ecommerce",
    src: "/images/pictures/ecommerce.webp",
    alt: "E-commerce",
  },
  {
    id: "landing",
    src: "/images/pictures/landing-page.webp",
    alt: "Landing Page",
  },

  { id: "blog", src: "/images/pictures/blog.webp", alt: "Blog" },
];

const slots = [
  { width: 219, height: 219, y: 142, z: 0 }, // esquerda fora do centro
  { width: 219, height: 219, y: 72, z: 1 }, // esquerda próxima
  { width: 306, height: 306, y: 0, z: 10 }, // centro
  { width: 219, height: 219, y: 72, z: 1 }, // direita próxima
  { width: 219, height: 219, y: 142, z: 0 }, // direita fora do centro
];

export default function Modalities() {
  const [order, setOrder] = useState<number[]>([0, 1, 2, 3, 4]);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const centerIndex = 2;
  const stepMs = 100; // tempo entre cada "passo" da rotação (ajuste se quiser mais rápido/lento)

  useEffect(() => {
    return () => {
      // cleanup se o componente desmontar
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  const rotateLeftOnce = () => {
    setOrder((prev) => {
      if (prev.length === 0) return prev;
      return [...prev.slice(1), prev[0]];
    });
  };

  const rotateRightOnce = () => {
    setOrder((prev) => {
      if (prev.length === 0) return prev;
      return [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)];
    });
  };

  const handleClick = (slotIndex: number) => {
    if (slotIndex === centerIndex || isAnimating) return;

    const n = order.length;
    const p = slotIndex; // posição atual do item clicado no array 'order'
    const c = centerIndex;

    // quantas rotações para a esquerda pra levar p ao centro:
    const stepsLeft = (p - c + n) % n;
    // quantas rotações para a direita pra levar p ao centro:
    const stepsRight = (c - p + n) % n;

    // escolhe o menor caminho (em caso de empate, usa o caminho mais curto à esquerda)
    const useLeft = stepsLeft <= stepsRight;
    const steps = useLeft ? stepsLeft : stepsRight;

    if (steps === 0) return; // já está no centro

    setIsAnimating(true);
    let count = 0;

    intervalRef.current = setInterval(() => {
      if (useLeft) {
        rotateLeftOnce();
      } else {
        rotateRightOnce();
      }

      count++;
      if (count >= steps) {
        // terminou
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        // dá uma pequena folga pro framer-motion terminar a animação antes de liberar clique
        setTimeout(() => setIsAnimating(false), 80);
      }
    }, stepMs);
  };

  return (
    <Section
      id="modalidades"
      className="py-8 bg-grayscale-50 relative z-1 mb-14"
      title="Modalidades"
    >
      <Text className="text-grayscale-500 text-sm text-center max-w-[852px] mx-auto mb-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      {/* Menu de textos */}
      <div className="inline-flex justify-center items-center relative gap-2 mb-12">
        {order.map((imgIndex, slotIndex) => {
          const text = modalidades[imgIndex];
          const isCenter = slotIndex === centerIndex;
          return (
            <motion.div
              key={text}
              layoutId={`text-${initialImages[imgIndex].id}`}
              className="flex w-[200px] md:w-[235px] h-[50px] items-center justify-center cursor-pointer"
              onClick={() => handleClick(slotIndex)}
              // animate={{
              //   scale: isCenter ? 1.2 : 1,
              //   opacity: isCenter ? 1 : 0.6,
              // }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <Text
                className={`relative w-fit ${
                  isCenter ? "text-2xl font-semibold" : "text-xs font-normal"
                } text-grayscale-400 whitespace-nowrap uppercase`}
              >
                {text}
              </Text>
            </motion.div>
          );
        })}
      </div>

      {/* Imagens */}
      <div className="inline-flex gap-5 flex-[0_0_auto] items-center relative">
        {order.map((imgIndex, slotIndex) => {
          const image = initialImages[imgIndex];
          const slot = slots[slotIndex];
          return (
            <motion.div
              key={image.id}
              layoutId={image.id}
              className="relative cursor-pointer"
              style={{ zIndex: slot.z }}
              onClick={() => handleClick(slotIndex)}
              animate={{ y: slot.y }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={slot.width}
                height={slot.height}
                className="object-cover rounded-lg"
              />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
