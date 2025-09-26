import { CSSProperties, ReactNode } from "react";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

interface Props {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  ref?: React.Ref<HTMLHeadingElement>;
}

export const Title = ({
  children,
  className = "",
  as: Element = "h1",
  style,
  ref,
}: Props) => {
  const getClassName = () => `${anton.className} uppercase ${className}`;

  return (
    <Element className={`${getClassName()}`} style={style} ref={ref}>
      {children}
    </Element>
  );
};
