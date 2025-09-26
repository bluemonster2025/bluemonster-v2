"use client";

import { useState } from "react";
import ListCards from "../ListCards";
import { Text } from "@/components/elements/Texts";
import { CardProps } from "../ListCards/types";

type Props = {
  listCards: CardProps[];
  itemsPerPage?: number;
};

export default function ListCardsWithPagination({
  listCards,
  itemsPerPage = 8,
}: Props) {
  const [visibleCount, setVisibleCount] = useState<number>(itemsPerPage);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + itemsPerPage);
  };

  const hasMore = visibleCount < listCards.length;

  return (
    <div className="flex flex-col gap-10">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ListCards listCards={listCards.slice(0, visibleCount)} />
      </div>

      {/* Botão */}
      <div className="flex justify-center">
        <button
          onClick={handleShowMore}
          disabled={!hasMore}
          className={`px-6 py-4 transition border border-grayscale-25 rounded
            ${
              hasMore
                ? "bg-white text-grayscale-300 cursor-pointer"
                : "text-grayscale-100 cursor-none"
            }`}
        >
          <Text className="text-sm font-bold">Ver mais</Text>
        </button>
      </div>
    </div>
  );
}
