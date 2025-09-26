"use client";

import { CSSProperties, ReactNode } from "react";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Text = ({ children, style, className = "" }: Props) => {
  const getClassName = () => `${open_sans.className} ${className} block`;

  return (
    <span className={getClassName()} style={style}>
      {children}
    </span>
  );
};
