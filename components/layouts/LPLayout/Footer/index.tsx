"use client";

import Icon from "@/components/elements/Icon";
import { LinkExternal } from "@/components/elements/LinkExternal/LinkExternal";
import { Section } from "@/components/elements/Section";
import { Text } from "@/components/elements/Texts";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/elements/WhatsAppButton";

export const Footer = () => {
  return (
    <>
      {/* Parte superior do Footer */}
      <Section className="border-b border-white bg-purplescale-50">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="/"
            className="relative w-[167px] aspect-[5.06/1] flex"
            aria-label="Página inicial Bluemonster"
          >
            <Image
              fill
              alt="Logo Bluemonster"
              src="/images/logos/logo-branca.svg"
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>

          {/* Redes sociais */}
          <div className="grid gap-1 grid-cols-1">
            <LinkExternal
              className="h-10 w-10 flex items-center justify-center rounded bg-white"
              href="https://www.instagram.com/bluemonster.com.br"
              aria-label="Instagram da Blue Monster"
            >
              <Icon name="FaInstagram" color="#687af6" size={16} />
            </LinkExternal>
          </div>
        </div>
      </Section>

      {/* Parte central com chamada para ação */}
      <Section className="bg-purplescale-50">
        <div className="hidden md:flex lg:items-center justify-between py-8">
          <div className="lg:pr-20">
            <Text className="text-white text-left text-base/[24px] font-semibold">
              Transforme sua ideia em um site hoje mesmo 🚀
            </Text>
            <Text className="text-white text-left text-base/[24px] font-light">
              Entre em contato conosco e solicite um orçamento para o seu
              projeto.
            </Text>
          </div>

          {/* Botão WhatsApp */}
          <div className="w-full md:w-[135px]">
            <WhatsAppButton title="Fale conosco" />
          </div>
        </div>
      </Section>

      {/* Parte inferior do Footer */}
      <Section>
        <Text className="text-center lg:text-left py-4 text-sm/[24px] text-grayscale-400 w-full h-full font-normal">
          ©2025 Todos os direitos reservados bluemonster.com.br
        </Text>
      </Section>
    </>
  );
};
