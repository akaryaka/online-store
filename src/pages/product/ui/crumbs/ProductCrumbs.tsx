import { Link } from "react-router";
import ArrowIcon from "@/widgets/icons/ArrowIcon";

const ProductCrumbs = () => {
  return (
    <>
      <div className="flex items-center gap-[10px]">
        <Link className="leading-[150%] text-[12px] text-[#414141]" to="/">
          Главная
        </Link>
        <ArrowIcon />
        <Link
          className="leading-[150%] text-[12px] text-[#414141]"
          to="/catalog"
        >
          Каталог
        </Link>
        <ArrowIcon />
        <Link
          className="leading-[150%] text-[12px] text-[#414141]"
          to="/category"
        >
          Молоко, сыр, яйцо
        </Link>
        <ArrowIcon />
        <Link
          className="leading-[150%] text-[12px] text-[#8F8F8F] "
          to="/catalog"
        >
          Масло ПРОСТОКВАШИНО сливочное в/с 82% фольга без змж, Россия, 180 г
        </Link>
      </div>
    </>
  );
};

export default ProductCrumbs;
