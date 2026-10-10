import type { Props } from "./Notice.props";
import cn from "classnames";

const noticeTypes: any = {
  secondary: "",
  primary: "bg-[#D80000] text-[#fff]",
  succes: "bg-[#70C05B] text-[#fff]",
  error: "bg-[#D80000] text-[#fff]",
  gray: "bg-[#F3F2F1] text-[#414141]",
};

const noticeSizes: any = {
  s: "h-[25px]",
  m: "h-[32px]",
  l: "h-[40px]",
};

const Notice = ({
  text = "notice",
  type = "gray",
  size = "m",
  className,
  ...props
}: Props) => {
  return (
    <>
      <div
        className={cn(
          "text-[16px] leading-[150%] p-[4px_8px] rounded-[4px]",
          className,
          noticeTypes[type],
          noticeSizes[size],
          { ...props },
        )}
      >
        {text}
      </div>
    </>
  );
};

export default Notice;
