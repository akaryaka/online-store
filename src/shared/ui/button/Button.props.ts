import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface Props extends DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  size?: string;
  accent?: string;
  icon?: React.ReactNode;
  leftIcon?: boolean;
  rightIcon?: boolean;
  type?: string;
  disabled?: boolean;
  clickEvent?: any;
  children: React.ReactNode;
}
