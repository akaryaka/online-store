import cn from "classnames";
import type { Props } from "./Button.props";

const ButtonGreyscale = ({ children, className, ...props }: Props) => {
  return (
    <>
      <button
        className={cn(
          "text-[16px] font-[Rubik] p-[8px_16px] bg-greyscale text-[#606060] rounded-[4px] transition-all cursor-pointer",
          className,
          { ...props },
        )}
      >
        {children}
      </button>
    </>
  );
};

export default ButtonGreyscale;
