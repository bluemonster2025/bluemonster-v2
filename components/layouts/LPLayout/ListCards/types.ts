import { ReactNode } from "react";

export interface CardProps {
  icon?: ReactNode | string;
  title: string;
  description: string;
}
