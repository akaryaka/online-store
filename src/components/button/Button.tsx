import cn from "classnames";
import type { Props } from "./Button.props";

const Button = ({
  children,
  bgColor,
  textColor,
  borderColor,
  border,
  className,
  ...props
}: Props) => {
  return (
    <>
      <button
        className={cn(
          `${border} text-[16px] bg-${bgColor}  border-[${borderColor}] text-[${textColor}] font-[Rubik] p-[8px] rounded-[4px] transition-all cursor-pointer`,
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
