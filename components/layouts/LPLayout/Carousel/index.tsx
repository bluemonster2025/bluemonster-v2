"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { words } from "./content";
import { Text } from "@/components/elements/Texts";

const animation = { duration: 10000, easing: (t: number) => t };

export default function Carousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      spacing: 20,
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    breakpoints: {
      "(max-width: 639px)": {
        slides: {
          perView: 3,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 8,
          spacing: 15,
        },
      },
      "(min-width: 640px) and (max-width: 1023px)": {
        slides: {
          perView: 4,
        },
      },
    },
  });

  return (
    <div className="w-full pb-16">
      <div
        ref={sliderRef}
        className="keen-slider w-full max-h-[48px] flex items-center"
      >
        {words.map((word, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex items-center justify-center text-black font-bold text-lg rounded-lg h-32"
          >
            <Text className="text-xs uppercase text-grayscale-400 font-normal">
              {word}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}
