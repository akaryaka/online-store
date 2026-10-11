import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface Props extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  children: React.ReactNode;
  size: "xl" | "l" | "m" | "s" | "xs";
}
