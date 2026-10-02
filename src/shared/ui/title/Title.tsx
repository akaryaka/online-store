import type { Props } from "./Title.props";
import cn from "classnames";

const Title = ({ children, className, ...props }: Props) => {
  return (
    <>
      <h1
        className={cn(
          "text-[64px] font-bold leading-[150%] text-[#414141]",
          className,
          { ...props },
        )}
      >
        {children}
      </h1>
    </>
  );
};

export default Title;
