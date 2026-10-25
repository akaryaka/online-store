import type { Props } from "./Container.props";
import cn from "classnames";

const Container = ({ children, className, ...props }: Props) => {
  return (
    <>
      <div
        className={cn(
          "w-[1208px] ml-[auto] mr-[auto] max-[1300px]:w-[768px] max-[991px]:w-[auto] max-[991px]:p-[0_70px] max-[887px]:p-[0_40px] max-[820px]:p-[0_20px] max-[767px]:w-[376px] max-[380px]:w-[auto] max-[380px]:p-[0_15px]",
          className,
          { ...props },
        )}
      >
        {children}
      </div>
    </>
  );
};

export default Container;
