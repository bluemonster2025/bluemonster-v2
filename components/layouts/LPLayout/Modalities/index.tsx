"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Section } from "@/components/elements/Section";
import { Text } from "@/components/elements/Texts";

// Importa o Keen Slider
import { useKeenSlider } from "keen-slider/react";

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

const desktopSlots = [
  { width: 219, height: 219, y: 142, z: 0 },
  { width: 219, height: 219, y: 72, z: 1 },
  { width: 306, height: 306, y: 0, z: 10 },
  { width: 219, height: 219, y: 72, z: 1 },
  { width: 219, height: 219, y: 142, z: 0 },
];

// VARIÁVEIS DE MOBILE
const MOBILE_CARD_WIDTH_VW = 80;
const MOBILE_CARD_HEIGHT = 300;
const MOBILE_CAROUSEL_HEIGHT = MOBILE_CARD_HEIGHT * 1.1;
const INITIAL_SLIDE_INDEX = 2;
// --------------------------------------------------------

export default function Modalities() {
  const [order, setOrder] = useState<number[]>([0, 1, 2, 3, 4]);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const centerIndex = 2;
  const stepMs = 100;
  const len = initialImages.length;

  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(INITIAL_SLIDE_INDEX);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: INITIAL_SLIDE_INDEX,
    loop: true,
    slides: {
      perView: 1.5,
      spacing: 10,
      origin: "center",
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 5, spacing: 20 },
        disabled: true,
      },
    },
    slideChanged(slider) {
      // O Keen Slider, no modo loop, usa o 'relative' index para saber qual slide da array original está no centro
      const relIndex = slider.track.details.rel;
      setCurrentSlide(relIndex);

      // A lógica do 'order' é mantida para que a transição desktop/mobile funcione,
      // mas é usada apenas no desktop agora.
      setOrder([
        (relIndex + 3) % len,
        (relIndex + 4) % len,
        relIndex, // Centro
        (relIndex + 1) % len,
        (relIndex + 2) % len,
      ]);
    },
  });

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    // Inicialização do 'order' para desktop
    const initialRelIndex = INITIAL_SLIDE_INDEX;
    setOrder([
      (initialRelIndex + 3) % len,
      (initialRelIndex + 4) % len,
      initialRelIndex,
      (initialRelIndex + 1) % len,
      (initialRelIndex + 2) % len,
    ]);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      window.removeEventListener("resize", checkIsMobile);
    };
  }, [len]);

  // --- LÓGICA DESKTOP (framer-motion) ---
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
    if (isMobile || slotIndex === centerIndex || isAnimating) return;

    const n = order.length;
    const p = slotIndex;
    const c = centerIndex;
    const stepsLeft = (p - c + n) % n;
    const stepsRight = (c - p + n) % n;
    const useLeft = stepsLeft <= stepsRight;
    const steps = useLeft ? stepsLeft : stepsRight;

    if (steps === 0) return;

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
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        setTimeout(() => setIsAnimating(false), 80);
      }
    }, stepMs);
  };
  // ------------------------------------

  return (
    <>
      <Section
        id="modalidades"
        className="pt-8 pb-0 md:py-8 bg-grayscale-50 relative z-1 md:mb-14"
        title="Modalidades"
      >
        <Text className="text-grayscale-500 text-sm text-center max-w-[852px] mx-auto mb-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        {/* CONTEÚDO DESKTOP (DENTRO da Section) */}
        {/* O menu de textos do desktop e as imagens do desktop permanecem aqui */}
        {!isMobile && (
          <>
            {/* Menu de textos Desktop (Horizontal) */}
            <div className="inline-flex justify-center items-center relative gap-2 mb-8 w-full">
              {order.map((imgIndex, slotIndex) => {
                const text = modalidades[imgIndex];
                const isCenter = slotIndex === centerIndex;

                return (
                  <motion.div
                    key={text}
                    layoutId={`text-${initialImages[imgIndex].id}`}
                    className="flex w-[235px] h-[50px] items-center justify-center cursor-pointer relative z-30"
                    onClick={() => handleClick(slotIndex)}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  >
                    <Text
                      className={`relative w-fit transition-all duration-300 whitespace-nowrap uppercase ${
                        isCenter
                          ? "text-2xl font-semibold text-grayscale-900"
                          : "text-xs font-normal text-grayscale-400"
                      }`}
                    >
                      {text}
                    </Text>
                  </motion.div>
                );
              })}
            </div>

            {/* Layout Desktop (Framer Motion) */}
            <div className="inline-flex gap-5 flex-[0_0_auto] items-center relative justify-center w-full">
              {order.map((imgIndex, slotIndex) => {
                const image = initialImages[imgIndex];
                const slot = desktopSlots[slotIndex];
                return (
                  <motion.div
                    key={image.id}
                    layoutId={image.id}
                    className="relative cursor-pointer rounded-xl shadow-xl"
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
                      className="object-cover rounded-xl"
                      priority={slotIndex === centerIndex}
                    />
                  </motion.div>
                );
              })}
            </div>
          </>
        )}
      </Section>

      {/* ---------------------------------------------------- */}
      {/* LAYOUT MOBILE (KEEN SLIDER) - FORA DA SECTION */}
      {/* ---------------------------------------------------- */}
      {isMobile && (
        <div className="relative mb-14">
          {/* NOVO BLOCO: Título da Modalidade (Texto) para Mobile */}
          <motion.div
            key={modalidades[currentSlide]} // Usa a key do texto atual para o Framer Motion
            layoutId={`text-${initialImages[currentSlide].id}`}
            className="flex justify-center items-center h-[50px] md:mt-8"
            // Não precisa de onClick aqui, pois a imagem já está sendo usada para navegação
          >
            <Text className="text-2xl font-semibold text-grayscale-400 whitespace-nowrap uppercase transition-opacity duration-300">
              {modalidades[currentSlide]} {/* Exibe o texto do slide ativo */}
            </Text>
          </motion.div>
          {/* Imagens Mobile (Keen Slider) */}
          <div
            className={`relative flex justify-center items-center mx-auto w-full overflow-hidden`}
            style={{ height: `${MOBILE_CAROUSEL_HEIGHT}px` }}
          >
            <div
              ref={sliderRef}
              className={`keen-slider w-full absolute`}
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              {initialImages.map((image, idx) => {
                const isCenter = idx === currentSlide;

                const widthStyle = `${MOBILE_CARD_WIDTH_VW}vw`;
                const height = MOBILE_CARD_HEIGHT;

                return (
                  <div
                    key={image.id}
                    className="keen-slider__slide"
                    style={{ minWidth: widthStyle, maxWidth: widthStyle }}
                  >
                    <div
                      className="w-full h-full relative cursor-pointer rounded-xl shadow-xl mx-auto"
                      style={{
                        transform: isCenter ? "scale(1)" : "scale(0.85)",
                        transition: "transform 0.3s",
                      }}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={500}
                        height={height}
                        className="object-cover rounded-xl w-full h-full"
                        priority={isCenter}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Setas de navegação Mobile (Permitindo loop) */}
          <div className="flex justify-center items-center gap-6 mt-4">
            {" "}
            {/* Ajustei a margem superior aqui */}
            <button
              onClick={() => instanceRef.current?.prev()}
              className="p-3 bg-transparent rounded-full text-grayscale-800 hover:bg-grayscale-100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 12H4M4 12L10 6M4 12L10 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="p-3 bg-transparent rounded-full text-grayscale-800 hover:bg-grayscale-100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 12H20M20 12L14 18M20 12L14 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
