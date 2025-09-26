"use client";

import { Text } from "@/components/elements/Texts";
import { CardProps } from "../types";

export const Cards = ({ icon, title, description }: CardProps) => {
  return (
    <div className="border border-grayscale-100 p-4 h-full flex flex-col gap-2 rounded-md text-center">
      <div className="mb-2 flex justify-center">{icon}</div>
      <Text className="text-grayscale-200 font-semibold text-sm/[24px]">
        {title}
      </Text>
      <Text className="text-sm/[24px] font-normal text-grayscale-150 mb-4">
        {description}
      </Text>
    </div>
  );
};
