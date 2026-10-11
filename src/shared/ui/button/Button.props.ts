import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface Props extends DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  size?: "l" | "m" | "s" | string;
  accent?:
    | "secondary"
    | "primary"
    | "primaryDisabled"
    | "greyscale"
    | "error"
    | "secondaryDisabled"
    | string;
  icon?: React.ReactNode;
  leftIcon?: boolean;
  rightIcon?: boolean;
  type?: "text-btn" | "icon-btn" | string;
  disabled?: boolean;
  clickEvent?: any;
  children: React.ReactNode;
}
