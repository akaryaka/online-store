import type { DetailedHTMLProps, LinkHTMLAttributes } from "react";

export interface PaginationLinkProps extends DetailedHTMLProps<
  LinkHTMLAttributes<HTMLLinkElement>,
  HTMLLinkElement
> {
  title: number;
  active?: boolean;
}
