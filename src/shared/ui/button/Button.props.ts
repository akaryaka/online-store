import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface Props extends DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  size?: string;
  accent?: string;
  icon?: string;
  type?: string;
  decoration?: string;
  hover?: string;
  disabled?: boolean;
  clickEvent?: string;
  children: React.ReactNode;
}
