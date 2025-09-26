import { LPLayout } from "@/components/layouts/LPLayout";
import { ReactNode } from "react";

export default function RootTemplate({ children }: { children: ReactNode }) {
  return <LPLayout>{children}</LPLayout>;
}
