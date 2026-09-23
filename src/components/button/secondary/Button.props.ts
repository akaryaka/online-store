import type { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export interface Props extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  text?: string;
  children: React.ReactNode;
}
