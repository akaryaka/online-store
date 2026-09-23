import type { Props } from "./Button.props";
import cn from "classnames";

const ButtonSecondary = ({ children, className, ...props }: Props) => {
  return (
    <>
      <button
        className={cn(
          "text-[16px] font-[Rubik] leading-[150%] p-[8px_16px] bg-secondary text-[#fff] rounded-[4px] transition-all cursor-pointer",
          className,
          { ...props },
        )}
      >
        {children}
      </button>
    </>
  );
};

export default ButtonSecondary;
