import Checkbox from "@mui/material/Checkbox";
import FavoritesIcon from "@/widgets/icons/FavoritesIcon";
import cn from "classnames";
import type { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface Props extends DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  status: boolean;
}

const FavoriteCheckedIcon = () => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.3653 1C15.1604 1 13.2067 2.07706 12 3.73408C10.7933 2.07706 8.84098 1 6.63474 1C2.9706 1 0 3.9706 0 7.63474C0 13.2098 12 22.2004 12 22.2004C12 22.2004 24 13.2098 24 7.63474C24 3.9706 21.0294 1 17.3653 1Z"
          fill="#ED1944"
        />
      </svg>
    </>
  );
};

const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

export default function IconCheckboxes({ status, className, ...props }: Props) {
  return (
    <div
      style={status ? { opacity: "1" } : { opacity: "0.5" }}
      className={cn(
        "w-[32px] h-[32px] flex justify-center items-center bg-[#F3F2F1] opacity-[0.5] p-[4px] rounded-[4px]",
        className,
        { ...props },
      )}
    >
      <Checkbox
        {...label}
        icon={<FavoritesIcon />}
        checkedIcon={<FavoriteCheckedIcon />}
      />
    </div>
  );
}
