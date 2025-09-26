"use client";

import { Section } from "@/components/elements/Section";
import { FAQ } from "@/components/layouts/LPLayout/Faq";
import { faqList } from "@/components/layouts/LPLayout/Faq/content";
import FeaturedFrame from "@/components/layouts/LPLayout/FeaturedFrame";
import Hero from "@/components/layouts/LPLayout/Hero";
import { listCardsServices } from "@/components/layouts/LPLayout/ListCards/content";
import Modalities from "@/components/layouts/LPLayout/Modalities";
import ProcessDevelopment from "@/components/layouts/LPLayout/ProcessDevelopment";
import ListCardsWithPagination from "@/components/layouts/LPLayout/ListCardsWithPagination";
import PromoModal from "@/components/layouts/LPLayout/PromoModal";
import Carousel from "@/components/layouts/LPLayout/Carousel";
import Solutions from "@/components/layouts/LPLayout/Solutions";

export function LPTemplate() {
  return (
    <>
      <PromoModal />

      <Hero />

      <Carousel />

      <Solutions />

      <Modalities />

      <FeaturedFrame />
      <Section className="pb-18" id="servicos" title="Nossos serviços">
        <ListCardsWithPagination listCards={listCardsServices} />
      </Section>

      <ProcessDevelopment />

      <FAQ data={faqList} tagH="h2" />
    </>
  );
}
