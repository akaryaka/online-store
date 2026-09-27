import cn from "classnames";
import type { Props } from "./Text.props";

const TextField = ({ placeholder, children, className, ...props }: Props) => {
  return (
    <>
      <div
        className={cn(
          "search pr-[8px] h-[40px] flex justify-between items-center border border-[#70C05B] rounded-[4px]",
          className,
          { ...props },
        )}
      >
        <input
          className="flex-1 p-[8px_16px] outline-none"
          type="text"
          placeholder={placeholder}
        />
        {children}
      </div>
    </>
  );
};

export default TextField;
