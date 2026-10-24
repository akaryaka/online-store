import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface Props extends DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  size: "l" | "m" | "s";
  accent:
    | "secondary"
    | "primary"
    | "primaryDisabled"
    | "greyscale"
    | "error"
    | "default"
    | "secondaryDisabled";
  icon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type: "text-btn" | "icon-btn";
  disabled?: boolean;
  clickEvent?: any;
  children?: React.ReactNode;
}
