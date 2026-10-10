import type { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export interface DayBtnProps extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  date: string;
  count: string;
}
