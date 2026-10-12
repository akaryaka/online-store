import type { Props } from "@/shared/ui/button/Button.props";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

export interface OrderCounterBtnProps
  extends
    DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    Props {
  date: string;
  count: string;
  dateSize: "l" | "m" | "s" | "xl" | "xs" | string;
  countSize: "l" | "m" | "s" | "xl" | "xs" | string;
}
