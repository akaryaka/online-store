import cn from "classnames";
import type { Props } from "./Button.props";
import { useState } from "react";

// оптимизация компонента, пример
// import { clsx } from 'clsx';
// import { ButtonProps } from '../types/button';

// const variantClasses = {
//   primary: 'bg-blue-600 text-white hover:bg-blue-700',
//   secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
//   danger: 'bg-red-500 text-white hover:bg-red-600',
//   ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
// };

// const sizeClasses = {
//   sm: 'px-3 py-1.5 text-sm',
//   md: 'px-4 py-2.5 text-base',
//   lg: 'px-6 py-3.5 text-lg',
// };

// export function Button({
//   variant = 'primary',
//   size = 'md',
//   isLoading = false,
//   leftIcon,
//   rightIcon,
//   children,
//   className,
//   disabled,
//   ...props
// }: ButtonProps) {
//   return (
//     <button
//       className={clsx(
//         'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors',
//         variantClasses[variant],
//         sizeClasses[size],
//         (disabled || isLoading) && 'opacity-70 cursor-not-allowed',
//         className
//       )}
//       disabled={disabled || isLoading}
//       {...props}
//     >
//       {isLoading && (
//         <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
//           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
//         </svg>
//       )}
//       {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
//       <span>{children}</span>
//       {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
//     </button>
//   );
// }

const Button = ({
  size,
  accent,
  hover,
  decoration,
  icon,
  type,
  children,
  className,
  clickEvent,
  ...props
}: Props) => {
  switch (size) {
    case "l":
      size = "60";
      break;
    case "m":
      size = "40";
      break;
    case "s":
      size = "32";
      break;
    default:
      break;
  }

  switch (accent) {
    case "secondary":
      accent = "#70C05B";
      break;
    case "primary":
      accent = "#FF6633";
      break;
    case "greyscale":
      accent = "#F3F2F1";
      break;
    case "error":
      accent = "#D80000";
      break;
    default:
      accent = "#fff";
      break;
  }

  const [bg, setBg] = useState(accent);

  function handleBtnEnter() {
    setBg("#FF6633");
  }

  function handleBtnBgLeave() {
    setBg(accent);
  }

  return (
    <>
      {type == "text-btn" && (
        <button
          onClick={clickEvent}
          onMouseEnter={handleBtnEnter}
          onMouseLeave={handleBtnBgLeave}
          style={{
            height: `${size}px`,
            border: "1px solid",
            borderColor: decoration,
            backgroundColor: bg,
          }}
          className={cn(
            `flex items-center justify-center font-[Rubik]  rounded-[4px] transition-all cursor-pointer`,
            className,
            { ...props },
          )}
        >
          {children}
        </button>
      )}
      {type == "icon-btn" && <button>{children}</button>}
    </>
  );
};

export default Button;
