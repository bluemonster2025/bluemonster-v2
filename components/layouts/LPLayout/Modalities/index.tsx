"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "@/components/elements/Section";
import { Text } from "@/components/elements/Texts";

const modalidades = [
  "CARDÁPIO DIGITAL",
  "BLOG",
  "E-COMMERCES",
  "LANDING PAGES",
  "SITE INSTITUCIONAL",
];

const initialImages = [
  {
    id: "cardapio",
    src: "/images/pictures/cardapio-digital.webp",
    alt: "Cardápio Digital",
  },
  { id: "blog", src: "/images/pictures/blog.webp", alt: "Blog" },
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
  {
    id: "site",
    src: "/images/pictures/site-institucional.webp",
    alt: "Site Institucional",
  },
];

// Configuração fixa dos slots (posições + dimensões)
const slots = [
  { width: 219, height: 219, containerHeight: 368, position: "top-[210px]" },
  { width: 219, height: 219, containerHeight: 368, position: "top-[111px]" },
  { width: 306, height: 306, containerHeight: 368, position: "top-0" }, // centro
  { width: 219, height: 219, containerHeight: 368, position: "bottom-[38px]" },
  { width: 219, height: 219, containerHeight: 368, position: "top-[210px]" },
];

const clickAnimate = {
  src: "/images/pictures/click-animate.webp",
  alt: "Click Animate",
  width: 44,
  height: 68,
};

export default function Modalities() {
  const [order, setOrder] = useState([0, 1, 2, 3, 4]);

  const handleClick = (slotIndex: number) => {
    const centerIndex = 2;
    const newOrder = [...order];
    [newOrder[slotIndex], newOrder[centerIndex]] = [
      newOrder[centerIndex],
      newOrder[slotIndex],
    ];
    setOrder(newOrder);
  };

  return (
    <Section
      id="modalidades"
      className="py-8 bg-grayscale-50 relative z-1"
      title="Modalidades"
    >
      <Text className="text-grayscale-500 text-sm text-center max-w-[852px] mx-auto mb-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. 
      </Text>

      <div className="flex flex-col items-center gap-8 relative">
        {/* Menu de textos - agora fica em cima */}
        <div className="inline-flex max-w-[1175px] justify-center items-center relative gap-2">
          {order.map((imgIndex, slotIndex) => {
            const text = modalidades[imgIndex];
            const image = initialImages[imgIndex];
            const isCenter = slotIndex === 2;

            return (
              <motion.div
                key={text}
                layoutId={`text-${image.id}`}
                className="flex w-[235px] h-[50px] items-center justify-center cursor-pointer"
                onClick={() => handleClick(slotIndex)}
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
        <div className="inline-flex gap-6 flex-[0_0_auto] items-center relative">
          {order.map((imgIndex, slotIndex) => {
            const image = initialImages[imgIndex];
            const slot = slots[slotIndex];
            const isCenter = slotIndex === 2;

            return (
              <motion.div
                key={image.id}
                layoutId={image.id}
                className="relative cursor-pointer"
                style={{ width: slot.width, height: slot.containerHeight }}
                onClick={() => handleClick(slotIndex)}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={slot.width}
                  height={slot.height}
                  className={`absolute ${slot.position} object-cover ${
                    isCenter ? "z-10" : "z-0"
                  }`}
                />

                {/* Click Animate só no centro */}
                {isCenter && (
                  <motion.div
                    className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20"
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.2,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src={clickAnimate.src}
                      alt={clickAnimate.alt}
                      width={clickAnimate.width}
                      height={clickAnimate.height}
                    />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
