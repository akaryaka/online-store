import type { Props } from "./Title.props";
import cn from "classnames";

const Title = ({ children, size, className, ...props }: Props) => {
  const sizesTitle = {
    xs: "text-[18px]",
    s: "text-[24px]",
    m: "text-[36px] max-[1300px]:text-[32px]",
    l: "text-[48px]",
    xl: "text-[64px] max-[1300px]:text-[48px]",
  };
  return (
    <>
      <h1
        className={cn(
          "font-bold leading-[150%] text-[#414141]",
          className,
          sizesTitle[size],
          { ...props },
        )}
      >
        {children}
      </h1>
    </>
  );
};

export default Title;
