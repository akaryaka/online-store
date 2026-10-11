import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface OrderCounterBtnProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  date: string;
  count: string;
  accent:
    | "secondary"
    | "primary"
    | "primaryDisabled"
    | "greyscale"
    | "error"
    | "secondaryDisabled"
    | string;
  size: string;
  dateSize: "l" | "m" | "s" | "xl" | "xs" | string;
  countSize: "l" | "m" | "s" | "xl" | "xs" | string;
}
