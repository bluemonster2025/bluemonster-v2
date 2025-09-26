import { LPTemplate } from "@/components/templates/LPTemplate";

export const metadata = {
  title: "Blue Monster",
  description:
    "Crie um site exclusivo e gerenciável para o seu negócio - com design moderno, loja virtual, SEO otimizado, hospedagem e suporte completo. Solicite um orçamento e aumente suas vendas hoje mesmo!",
  openGraph: {
    url: "https://bluemonster.com.br/",
    type: "website",
    title: "Blue Monster",
    description:
      "Crie um site exclusivo e gerenciável para o seu negócio - com design moderno, loja virtual, SEO otimizado, hospedagem e suporte completo. Solicite um orçamento e aumente suas vendas hoje mesmo!",
    images: [
      {
        url: "https://bluemonster.com.br/images/pictures/thumbnail-new.jpg", // URL ABSOLUTA
        width: 1200,
        height: 630,
        alt: "Blue Monster",
      },
    ],
  },
};

export default function Home() {
  return <LPTemplate />;
}
