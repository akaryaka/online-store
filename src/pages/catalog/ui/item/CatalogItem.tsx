import { Link } from "react-router";
import cn from "classnames";

interface Props {
  title: string;
  link: string;
  img: string;
  size?: "col-span-2" | "";
}

const CatalogItem = ({ title, link, img, size, ...props }: Props) => {
  return (
    <>
      <div
        className={cn(
          "h-[200px] bg-[green] rounded-[4px]  relative cursor-pointer",
          size,
          { ...props },
        )}
        style={{ backgroundImage: `url(${img})` }}
      >
        <Link
          to={link}
          target="_blank"
          className="text-[#fff] rounded-[4px] h-[117px] p-[10px] flex items-end bg-[linear-gradient(180deg,rgba(112,192,91,0)_0%,#70C05B_82.81%)] hover:bg-[linear-gradient(180deg,rgba(255,102,51,0)_0%,#FF6633_100%)] hover:h-[177px] transition-all absolute left-[0px] bottom-[0px] w-[100%] text-[18px] leading-[150%] font-bold"
        >
          {title}
        </Link>
      </div>
    </>
  );
};

export default CatalogItem;
