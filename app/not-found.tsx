"use client";

import { Title, Text } from "@/components/elements/Texts";
import { Footer } from "@/components/layouts/LPLayout/Footer";
import Header from "@/components/layouts/LPLayout/Header";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <Header />

      <div className="flex items-center justify-end min-h-screen bg-grayscale-50">
        <div className="flex flex-col lg:flex-row items-center w-full lg:pl-32">
          <div className="text-center md:text-left flex flex-col lg:flex-row items-center lg:gap-8 w-full justify-center">
            <Title className="text-[152px] lg:text-[160px] text-purplescale-50">
              404
            </Title>
            <div className="flex flex-col gap-4">
              <Text className="mt-2 text-purplescale-50 text-2xl/[24px] font-bold">
                OPS!
              </Text>
              <Text className="text-grayscale-300 text-base/[24px] font-semibold max-w-[334px]">
                A página que você procura não foi encontrada neste servidor.
              </Text>
            </div>
          </div>

          <div className="relative w-full py-[66%] lg:py-[33%]">
            <Image
              src="/images/pictures/404.png"
              alt="404 Monster"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
