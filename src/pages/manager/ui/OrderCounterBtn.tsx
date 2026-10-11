import Button from "@/shared/ui/button";
import Text from "@/shared/ui/text";
import cn from "classnames";
import type { OrderCounterBtnProps } from "../models/OrderCounterBtn.props";
import { bgButtons } from "../models/bgButtonsList";

const OrderCounterBtn = ({
  date,
  count,
  size,
  dateSize,
  countSize,
  accent,
  className,
  ...props
}: OrderCounterBtnProps) => {
  return (
    <>
      <Button
        type="text-btn"
        size={size}
        className={cn("flex items-center", className, bgButtons[accent], {
          ...props,
        })}
      >
        <Text size={dateSize}>{date}</Text>
        <div className="inline-flex h-[100%] justify-center text-[#fff] bg-[#FF6633] p-[4px_8px] rounded-[4px]">
          <Text size={countSize}>{count}</Text>
        </div>
      </Button>
    </>
  );
};

export default OrderCounterBtn;
