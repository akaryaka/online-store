import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface Props extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  text: string;
  size?: string;
  type: any;
  icon?: string;
}
