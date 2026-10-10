import cn from "classnames";
import type { Props } from "./Button.props";

const Button = ({
  size,
  accent,
  leftIcon,
  rightIcon,
  icon,
  type,
  children,
  className,
  clickEvent,
  ...props
}: Props) => {
  const sizeClass = {
    l: "h-[60px]",
    m: "h-[40px]",
    s: "h-[32px]",
  };

  const accentClass = {
    secondary: "bg-[#70C05B] border-[#70C05B] ",
    primary: "bg-[#FF6633] text-[#fff]",
    greyscale: "bg-[#F3F2F1]",
    error: "bg-[#D80000]",
    default:
      "bg-[#fff] border border-[#70C05B] text-[#70C05B] hover:bg-[#FF6633] hover:text-[white] hover:border-[#FF6633]",
  };

  return (
    <>
      {type == "text-btn" && (
        <button
          onClick={clickEvent}
          className={cn(
            `flex font-[Rubik] rounded-[4px] transition-all cursor-pointer`,
            className,
            sizeClass[size],
            accentClass[accent],
            { ...props },
          )}
        >
          {leftIcon && <span>{icon}</span>}
          <span>{children}</span>
          {rightIcon && <span>{icon}</span>}
        </button>
      )}
      {type == "icon-btn" && <button>{icon}</button>}
    </>
  );
};

export default Button;
