"use client";

import { Open_Sans } from "next/font/google";
import "../styles/globals.css";
import { ReactNode } from "react";

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-BR">
      <head></head>
      <body className={open_sans.className}>{children}</body>
    </html>
  );
}
