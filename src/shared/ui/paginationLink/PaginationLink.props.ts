import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PaginationLinkProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLLinkElement>,
  HTMLLinkElement
> {
  title: number;
  active?: boolean;
}
