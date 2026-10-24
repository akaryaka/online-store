import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PaginationLinkProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLLinkElement>,
  HTMLLinkElement
> {
  text: number;
  active?: boolean;
}
