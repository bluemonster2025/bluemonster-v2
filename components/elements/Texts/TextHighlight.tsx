import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  textColor?: string;
  className?: string;
}

export const TextHighlight = ({
  children,
  textColor,
  className = "",
}: Props) => (
  <span className={`${textColor} ${className || ""}`}>{children}</span>
);
