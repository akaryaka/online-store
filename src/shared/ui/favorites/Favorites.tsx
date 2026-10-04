import HeartIcon from "../../../widgets/icons/HeartIcon";
import type { Props } from "./Favorites.props";
import cn from "classnames";

const Favorites = ({ status, className, ...props }: Props) => {
  return (
    <>
      <div
        className={cn(
          "bg-[#F3F2F1] p-[4px] rounded-[4px] opacity-[0.5]",
          className,
          { ...props },
        )}
      >
        <HeartIcon fill="" favorites={status} />
      </div>
    </>
  );
};

export default Favorites;
