import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface Props extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  decoration?: string;
  bgColor?: string;
  border?: string;
  borderColor?: string;
  textColor?: string;
  children: React.ReactNode;
}
