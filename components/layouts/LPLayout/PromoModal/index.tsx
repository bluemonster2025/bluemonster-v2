"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { WhatsAppButton } from "@/components/elements/WhatsAppButton";
import { Text, TextHighlight, Title } from "@/components/elements/Texts";
import { Bebas_Neue } from "next/font/google";

const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <>
      {/* DESKTOP */}
      <div className="hidden lg:block">
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-[1087px] bg-white overflow-hidden flex flex-col md:flex-row lg:h-[77%] xl:h-[66%] 1xl:h-[49%]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão de fechar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl z-20"
            >
              ×
            </button>

            {/* Parte Esquerda (Imagem de Fundo 1) */}
            <div className="w-full md:w-1/2 text-white p-8 flex flex-col justify-center relative">
              <Image
                src="/images/pictures/bg-popup-azul.webp"
                alt="Promoção fundo azul"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />

              <div className="relative z-10">
                <Text className="absolute -left-24 top-[45%] -rotate-90 text-2xl tracking-widest bg-white p-2 text-purplescale-50 font-bold">
                  todos os sites com
                </Text>
                <div className="max-w-[20rem] mx-auto">
                  <Title
                    as="h2"
                    className={`text-[221px]/[185px] font-extrabold ${bebas_neue.className}`}
                  >
                    30%
                  </Title>

                  <Text
                    className={`text-[41px]/[34px] uppercase ${bebas_neue.className}`}
                  >
                    de desconto
                  </Text>
                  <Text className="mt-4 text-[15px]">
                    <strong>A hora é agora! </strong>Garanta seu site antes
                  </Text>
                  <Text className="text-[15px]">que a promoção acabe.</Text>
                </div>
              </div>
            </div>

            {/* Parte Direita (Imagem de Fundo 2) */}
            <div className="w-full md:w-1/2 pl-[14rem] p-8 flex flex-col justify-center text-center md:text-left relative">
              <Image
                src="/images/pictures/bg-popup-branco.png"
                alt="Promoção fundo branco"
                fill
                priority
                fetchPriority="high"
                style={{ objectFit: "cover" }}
              />

              <div className="relative z-10">
                <div className={`text-[44px] ${bebas_neue.className}`}>
                  <Title as="h2" className="mb-2 uppercase">
                    Não{" "}
                    <TextHighlight className="text-purplescale-50">
                      perca{" "}
                    </TextHighlight>
                    essa{" "}
                    <TextHighlight className="text-purplescale-50">
                      Chance!
                    </TextHighlight>
                  </Title>
                  <Title> </Title>

                  <Text className="mt-2 text-sm text-grayscale-200">
                    Desconto imperdível!
                  </Text>
                </div>
                <div className="w-full md:w-[230px] mt-4 border border-grayscale-100 rounded">
                  <WhatsAppButton
                    title="Solicite um orçamento"
                    iconName="BsWhatsapp"
                    iconColor="#282828"
                  />
                </div>
              </div>
            </div>

            {/* Mascote */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative w-[421px] h-[421px] md:w-[421px] md:h-[421px] mx-auto">
                <Image
                  src="/images/pictures/monster-popup.webp"
                  alt="Bluemonster"
                  fill
                  sizes="(max-width: 768px) 200px, 421px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="block lg:hidden">
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="relative w-[85%] max-w-[21rem]">
            <div className="relative w-full xs:h-[550px] h-[640px]">
              <Image
                src="/images/pictures/Pop-Up mobile.webp"
                alt="Promoção"
                fill
                style={{ objectFit: "contain" }}
                priority
                fetchPriority="high"
              />

              {/* Botão Fechar */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute z-20 text-white text-[40px] top-[0%] xs:right-[6%] 1xs:right-[12%]"
              >
                ×
              </button>

              {/* Botão WhatsApp */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 w-[80%]">
                {/* <WhatsAppButton
                  title="Solicite um orçamento"
                  variant="primary"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
