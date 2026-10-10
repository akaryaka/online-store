import Button from "@shared/ui/button";
import Favorites from "@shared/ui/favorites";
import Stars from "../icons/stars/Stars";
import { Link } from "react-router";
import type { Props } from "./Card.props";

const Card = ({
  price = "0",
  title = "не удалось загрузить",
  img,
  rating = 3,
  favorites,
}: Props) => {
  return (
    <>
      <div className="flex flex-col hover:shadow-[4px_8px_16px_rgba(255,102,51,0.2)] hover:translate-y-[-5px] transition-all cursor-pointer rounded-[10px] bg-[#fff]">
        <header className="relative">
          <img src={img} alt="cacke" />
          <Favorites
            status={favorites}
            className="absolute top-[8px] right-[8px]"
          />
        </header>
        <div className="p-[8px] flex grow flex-col">
          <div className="flex h-[45px] justify-between pt-[8px] mb-[18px]">
            <div>
              <div className="text-[#414141] flex gap-[4px] text-[18px] font-bold">
                <span>{price}</span>
                <span>₽</span>
              </div>
            </div>
          </div>
          <Link target="_blank" to="/catalog/category/product">
            {title}
          </Link>
          <Stars className="mb-[8px]" rating={rating} />
          <Button
            size="m"
            type="text-btn"
            accent="default"
            className="mt-[auto] flex justify-center items-center w-[100%]"
          >
            В корзину
          </Button>
        </div>
      </div>
    </>
  );
};

export default Card;
