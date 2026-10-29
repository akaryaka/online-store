import type { Props } from "./Title.props";
import cn from "classnames";

const Title = ({ children, size, className, ...props }: Props) => {
  const sizesTitle = {
    xs: "text-[18px]",
    s: "text-[24px] max-[767px]:text-[20px] max-[375px]:text-[18px]",
    m: "text-[36px] max-[1300px]:text-[32px] max-[767px]:text-[24px] max-[375px]:text-[20px]",
    l: "text-[48px]",
    xl: "text-[64px] max-[1300px]:text-[48px] max-[991px]:text-[36px] max-[767px]:text-[24px]",
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
