import type { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface Props extends DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  rating: number;
}
