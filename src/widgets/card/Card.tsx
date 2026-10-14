import Button from "@shared/ui/button";
import Favorites from "@shared/ui/favorites";
import Stars from "../icons/stars/Stars";
import { Link } from "react-router";
import type { Props } from "./Card.props";
import Sales from "@/shared/ui/sales";
import Text from "@/shared/ui/text";
import ShoppingCart from "../icons/ShoppingCart";
import { Skeleton } from "@mui/material";
import { useEffect,useState } from "react";


const Card = ({
  price = "0",
  title = "не удалось загрузить",
  priceSales,
  balance = "1",
  img,
  type = "product",
  rating = 3,
  favorites,
}: Props) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      { loading ? (<div className="flex flex-col hover:shadow-[4px_8px_16px_rgba(255,102,51,0.2)] hover:translate-y-[-5px] transition-all cursor-pointer rounded-[10px] bg-[#fff]">
        <header className="relative">
          <img src={img} alt="cacke" />
          {type === "balance" && (
            <div className="absolute top-[10px] left-[10px] flex gap-[6px]">
              <ShoppingCart width="24" height="24" fill="#000" />
              <Text className="font-bold" size="m">
                {balance}
              </Text>
            </div>
          )}
          {type === "sale" && (
            <Sales className="absolute bottom-[10px] left-[10px]">-50%</Sales>
          )}
          <Favorites
            status={favorites}
            className="absolute top-[8px] right-[8px]"
          />
        </header>
        <div className="p-[8px] flex grow flex-col">
          {type === "product" ||
            (type === "balance" && (
              <div className="flex h-[45px] justify-between pt-[8px] mb-[18px]">
                <div>
                  <div className="text-[#414141] flex gap-[4px] text-[18px] font-bold">
                    <span>{price}</span>
                    <span>₽</span>
                  </div>
                </div>
              </div>
            ))}
          {type === "sale" && (
            <div className="flex justify-between pt-[8px] mb-[8px]">
              <div>
                <div className="text-[#414141] flex gap-[4px] text-[18px] font-bold">
                  <span>{priceSales}</span>
                  <span>₽</span>
                </div>
                <div className="text-[12px] leading-[150%] text-[#BFBFBF]">
                  С картой
                </div>
              </div>
              <div>
                <div className="flex gap-[4px] text-[16px] leading-[150%] text-[#606060]">
                  <span>{price}</span>
                  <span>₽</span>
                </div>
                <div className="text-right text-[12px] leading-[150%] text-[#BFBFBF]">
                  Обычная
                </div>
              </div>
            </div>
          )}
          <Link target="_blank" to="/catalog/category/product">
            <Text size="s">{title}</Text>
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
      </div> )
      : 
      <Skeleton variant="rectangular" width={210} height={118} />
      }
    </>
  );
};

export default Card;
