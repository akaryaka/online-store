import type { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface Props extends DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLHeadingElement>,
  HTMLDivElement
> {
  children: React.ReactNode;
}
