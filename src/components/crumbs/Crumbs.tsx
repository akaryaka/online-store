import { Link } from "react-router";
import ArrowIcon from "../icons/ArrowIcon";

const Crumbs = () => {
  return (
    <>
      <div className="flex items-center gap-[10px]">
        <Link className="leading-[150%] text-[12px] text-[#414141]" to="/">
          Главная
        </Link>
        <ArrowIcon />
        <Link className="leading-[150%] text-[12px] text-[#8F8F8F]" to="/">
          Контакты
        </Link>
      </div>
    </>
  );
};

export default Crumbs;
