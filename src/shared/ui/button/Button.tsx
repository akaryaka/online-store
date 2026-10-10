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
    secondary:
      "bg-[#70C05B] text-[#fff] border-[#70C05B] hover:shadow-[4px_8px_16px_rgba(112,192,91,0.2)] active:shadow-[inset_0px_2px_0px_rgba(0,0,0,0.2)]",
    primary:
      "bg-[#FF6633] text-[#fff] hover:shadow-[4px_8px_16px_rgba(255,102,51,0.2)] active:shadow-[inset_0px_2px_0px_rgba(0,0,0,0.2)]",
    primaryDisabled: "text-[#FF6633] bg-[#FCD5BA]",
    greyscale:
      "bg-[#F3F2F1] text-[#606060] hover:shadow-[4px_8px_16px_rgba(0,0,0,0.1)] active:shadow-[inset_0px_2px_0px_rgba(0,0,0,0.2)]",
    error: "bg-[#D80000]",
    default:
      "bg-[#fff] border border-[#70C05B] text-[#70C05B] hover:bg-[#FF6633] hover:shadow-[4px_8px_16px_rgba(255,102,51,0.2)] hover:text-[white] hover:border-[#FF6633] active:shadow-[inset_0px_2px_0px_rgba(0,0,0,0.2)]",
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
