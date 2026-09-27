import cn from "classnames";
import type { Props } from "./Button.props";

const Button = ({ children, className, ...props }: Props) => {
  return (
    <>
      <button
        className={cn(
          `text-[16px] font-[Rubik] p-[8px] rounded-[4px] transition-all cursor-pointer`,
          className,
          { ...props },
        )}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
