import type { Props } from "./Sales.props";
import cn from "classnames";

const Sales = ({ children, className, ...props }: Props) => {
  return (
    <>
      <div
        className={cn(
          "bg-[#FF6633] text-[#fff] p-[4px_8px] rounded-[4px] inline",
          className,
          { ...props },
        )}
      >
        {children}
      </div>
    </>
  );
};

export default Sales;
