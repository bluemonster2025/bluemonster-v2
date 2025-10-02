"use client";

import { Section } from "@/components/elements/Section";
import { Text } from "@/components/elements/Texts";
import Image from "next/image";
import { useState } from "react";

interface IFaqItemProps {
  title: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  isLast: boolean;
}

const FaqItem = ({ title, answer, isOpen, onClick, isLast }: IFaqItemProps) => {
  return (
    <div
      className={`pb-6  border-b border-[#EBECEF] ${isLast ? "mb-0" : "mb-6"}`}
    >
      <div
        onClick={onClick}
        className="cursor-pointer relative flex items-center py-2"
      >
        {/* Texto centralizado */}
        <Text className="absolute left-1/2 -translate-x-1/2 text-sm font-semibold text-grayscale-400 text-center">
          {title}
        </Text>

        {/* Ícone sempre alinhado à direita */}
        <div className="ml-auto">
          <Image
            width="24"
            height="24"
            src={`/images/icons/icon-${isOpen ? "minus" : "plus"}.svg`}
            alt="Pergunta ícone"
            priority
          />
        </div>
      </div>

      <main
        className={`overflow-hidden transition-all ${
          isOpen ? "h-20 lg:h-10" : "h-0"
        }`}
      >
        <Text className="text-purplescale-100 text-sm font-normal mt-4 h-20 lg:h-10 overflow-hidden text-center">
          {answer}
        </Text>
      </main>
    </div>
  );
};

interface IFaq {
  data: Omit<IFaqItemProps, "isOpen" | "onClick" | "isLast">[];
  tagH?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const FAQ = ({ data }: IFaq) => {
  const [questOpened, setQuestOpened] = useState<number | undefined>(0);

  const handleQuestionClick = (index: number) =>
    index === questOpened ? setQuestOpened(undefined) : setQuestOpened(index);

  return (
    <Section
      id="faq"
      className="pb-0 lg:pb-18 pt-9"
      title="Perguntas frequentes"
    >
      <div className="flex justify-center pb-0">
        <div className="w-full max-w-[800px] mb-20 md:mb-0">
          {data.map((question, index) => (
            <FaqItem
              key={index}
              title={question.title}
              answer={question.answer}
              isOpen={questOpened === index}
              onClick={() => handleQuestionClick(index)}
              isLast={index === data.length - 1}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
