import cn from "classnames";
import type { Props } from "./Text.props";

const TextField = ({ placeholder, children, className, ...props }: Props) => {
  return (
    <>
      <div
        className={cn(
          "pr-[8px] h-[40px] flex items-center border focus:shadow-[4px_8px_16px_rgba(112,192,91,0.2)] border-[#BFBFBF] rounded-[4px]",
          className,
          { ...props },
        )}
      >
        <input
          className="p-[8px_16px] outline-none w-[100%] "
          type="text"
          placeholder={placeholder}
        />
        <div>{children}</div>
      </div>
    </>
  );
};

export default TextField;
