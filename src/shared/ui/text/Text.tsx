import type { Props } from "./Text.props";
import cn from "classnames";

const textSizes = {
  xs: "text-[12px]",
  s: "text-[16px]",
  m: "text-[18px]",
  l: "text-[24px]",
  xl: "text-[36px]",
};

const Text = ({ text, size, className, ...props }: Props) => {
  return (
    <>
      <div
        className={cn("leading-[150%]", textSizes[size], className, {
          ...props,
        })}
      >
        {text}
      </div>
    </>
  );
};

export default Text;
