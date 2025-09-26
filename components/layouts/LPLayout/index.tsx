"use client";

import { ReactNode } from "react";
import Header from "./Header";
import { Footer } from "./Footer";

interface Props {
  children: ReactNode;
}

export const LPLayout = ({ children }: Props) => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
