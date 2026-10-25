import type { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import type React from "react";

export interface Props extends DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  children: React.ReactNode;
}
