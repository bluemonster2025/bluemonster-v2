import { ElementType, ReactNode } from "react";
import { Title } from "../Texts";

interface Props {
  children?: ReactNode;
  className?: string;
  id?: string;
  title?: ReactNode;
  subtitle?: ReactNode | string;
  asTag?: ElementType;
  noPadding?: boolean;
}

export const Section = ({
  children,
  className,
  id,
  title,
  subtitle,
  asTag: Tag = "section",
  noPadding = false,
}: Props) => {
  const getClass = () =>
    `${
      !noPadding && "px-5 md:px-0"
    } w-full max-w-[42rem] lg:max-w-[55rem] xl:max-w-[75rem] 2xl:max-w-[83rem] 1xl:max-w-[90rem] 3xl:max-w-[100rem] mx-auto`;
  return (
    <Tag id={id} className={className}>
      <div className={getClass()}>
        {title ? (
          <Title
            as="h2"
            className="text-[32px] mb-6 md:mb-10 text-grayscale-600 text-center"
          >
            {title}
          </Title>
        ) : null}
        {subtitle ? (
          <Title className="text-base/[24px] text-grayscale-300 normal-case mb-10">
            {subtitle}
          </Title>
        ) : null}
        {children}
      </div>
    </Tag>
  );
};
