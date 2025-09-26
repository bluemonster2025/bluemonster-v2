"use client";

import { Cards } from "./components/Card";
import { CardProps } from "./types";

interface Props {
  listCards?: CardProps[];
}

export default function ListCards({ listCards = [] }: Props) {
  return (
    <>
      {listCards.map((item, index) => (
        <Cards
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </>
  );
}
