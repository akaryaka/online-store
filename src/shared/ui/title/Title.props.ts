import type { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface Props extends DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLHeadingElement>,
  HTMLDivElement
> {
  children: React.ReactNode;
  size: "xs" | "s" | "m" | "l" | "xl";
}
