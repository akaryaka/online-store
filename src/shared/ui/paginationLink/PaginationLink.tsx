import cn from "classnames";
import type { PaginationLinkProps } from "./PaginationLink.props";

const PaginationLink = ({
  title,
  className,
  ...props
}: PaginationLinkProps) => {
  return (
    <>
      <a
        className={cn(
          "text-[16px] leading-[150%] text-[#606060] p-[8px]",
          className,
          { ...props },
        )}
        href="#"
      >
        {title}
      </a>
    </>
  );
};

export default PaginationLink;
