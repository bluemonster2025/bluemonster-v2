"use client";

import { useState, useEffect } from "react";
import ListCards from "../ListCards";
import { Text } from "@/components/elements/Texts";
import { CardProps } from "../ListCards/types";

type Props = {
  listCards: CardProps[];
  itemsPerPage?: number;
};

// Hook para detectar media query
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export default function ListCardsWithPagination({
  listCards,
  itemsPerPage = 8, // padrão desktop
}: Props) {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const perPage = isMobile ? 3 : itemsPerPage;

  const [visibleCount, setVisibleCount] = useState<number>(perPage);

  // quando mudar de mobile ↔ desktop, reseta o visível
  useEffect(() => {
    setVisibleCount(perPage);
  }, [perPage]);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + perPage);
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
