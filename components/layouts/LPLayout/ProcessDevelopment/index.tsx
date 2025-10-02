"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Text } from "@/components/elements/Texts";
import { steps } from "./content";
import { Section } from "@/components/elements/Section";

export default function ProcessDevelopment() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: "snap",
    slides: {
      perView: 1.25,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2.25 },
      },
    },
  });

  return (
    <>
      {" "}
      <Section
        id="processo"
        className="pb-18 lg:pt-10 lg:pb-20 bg-grayscale-50"
        title="Processo de desenvolvimento"
      >
        {/* MOBILE → Slider */}
        <div className="block lg:hidden">
          <div ref={sliderRef} className="keen-slider">
            {steps.map((step) => (
              <div
                key={step.id}
                className="keen-slider__slide border border-grayscale-100"
              >
                <StepCard step={step} />
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP → Grid */}
        <div className="hidden lg:grid grid-cols-3 bg-white max-w-[928px] mx-auto">
          {steps.map((step) => (
            <div key={step.id} className="border border-grayscale-100">
              <StepCard step={step} />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

function StepCard({ step }: { step: (typeof steps)[0] }) {
  return (
    <>
      {/* Cabeçalho */}
      <div className="pl-4 py-4 flex flex-col items-center gap-6 mb-4 border-b border-grayscale-100 min-h-[165px]">
        <div className="w-10 h-10 rounded-full bg-purplescale-50 flex items-center justify-center">
          <Text className="text-white font-semibold text-base">{step.id}</Text>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <Text className="font-semibold text-grayscale-300 text-sm">
            {step.title}
          </Text>
          <Text className="text-sm text-grayscale-150">{step.description}</Text>
        </div>
      </div>

      {/* Lista de itens */}
      <ul className="space-y-2 mt-4 px-4 pb-4">
        {step.items.map((group, groupIndex) => (
          <li key={groupIndex} className="flex flex-wrap gap-2 justify-center">
            {group.map((item, index) => (
              <Text
                key={index}
                className="px-4 py-2 bg-grayscale-50 rounded-full text-xs text-grayscale-300 whitespace-nowrap"
              >
                {item}
              </Text>
            ))}
          </li>
        ))}
      </ul>
    </>
  );
}
