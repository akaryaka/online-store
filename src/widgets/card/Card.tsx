import Button from "@shared/ui/button/Button";
import Favorites from "@shared/ui/favorites/Favorites";
import Stars from "../icons/stars/Stars";
import { Link } from "react-router";
import type { Props } from "./Card.props";

const CardNewProduct = ({ price, title, img, rating, favorites }: Props) => {
  return (
    <>
      <div className="hover:shadow-[4px_8px_16px_rgba(255,102,51,0.2)] hover:translate-y-[-5px] transition-all cursor-pointer rounded-[10px] bg-[#fff]">
        <header className="relative">
          <img src={img} alt="cacke" />
          <Favorites
            onClick={() => alert(1)}
            status={favorites}
            className="absolute top-[8px] right-[8px]"
          />
        </header>
        <div className="p-[8px]">
          <div className="flex justify-between pt-[8px] mb-[8px]">
            <div>
              <div className="text-[#414141] flex gap-[4px] text-[18px] font-bold">
                <span>{price}</span>
                <span>₽</span>
              </div>
            </div>
          </div>
          <Link
            target="_blank"
            to="/catalog/category/product"
            className="mb-[8px]"
          >
            {title}
          </Link>
          <Stars className="mb-[8px]" rating={rating} />
          <Button
            border="border"
            className="w-[100%] border-[#70C05B] text-[#70C05B] hover:bg-[#FF6633] hover:text-[white] hover:border-[#FF6633]"
          >
            В корзину
          </Button>
        </div>
      </div>
    </>
  );
};

export default CardNewProduct;
