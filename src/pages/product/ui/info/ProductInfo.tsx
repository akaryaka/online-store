import ShoppingCart from "@/pages/shoppingCart";
import Sales from "@/shared/ui/sales";
import BellOf from "@/widgets/icons/BellOf";
import FavoritesIcon from "@/widgets/icons/FavoritesIcon";
import InfoIcon from "@/widgets/icons/InfoIcon";
import SharedIcon from "@/widgets/icons/SharedIcon";
import SmileIcon from "@/widgets/icons/SmileIcont";
import Stars from "@/widgets/icons/stars/Stars";
import Button from "@/shared/ui/button";
import productSimilar1 from "@images/product-silimilar1.png";
import productOil from "@images/product-oil-big.png";

const ProductInfo = () => {
  return (
    <>
      <div className="mb-[120px]">
        <h1 className="text-[24px] leading-[150%] font-bold text-[#414141] mb-[16px]">
          Масло ПРОСТОКВАШИНО сливочное в/с 82% фольга без змж, Россия, 180 г
        </h1>
        <header className="flex items-center gap-[24px] mb-[16px]">
          <div className="text-[12px] text-[#414141] leading-[150%]">
            арт. 371431
          </div>
          <a href="#" className="flex items-center gap-[8px]">
            <Stars rating={2} />
            <span className="underline text-[#414141] text-[14px] leading-[150%]">
              3 отзыва
            </span>
          </a>
          <button className="flex items-center gap-[8px] cursor-pointer">
            <SharedIcon />
            <span className="text-[12px] leading-[150%] text-[#606060]">
              Поделиться
            </span>
          </button>
          <button className="flex items-center gap-[8px] cursor-pointer">
            <FavoritesIcon />
            <span className="text-[12px] leading-[150%] text-[#606060]">
              В избранное
            </span>
          </button>
        </header>
        <div className="flex">
          <div className="sidebar flex flex-col gap-[16px] w-[64px] mr-[16px]">
            <div className="bg-[#fff] shadow-[1px_2px_4px_rgba(0,0,0,0.1)] cursor-pointer">
              <img src={productOil} alt="productOil" />
            </div>
            <div className="bg-[#fff] shadow-[1px_2px_4px_rgba(0,0,0,0.1)] cursor-pointer">
              <img src={productOil} alt="productOil" />
            </div>
            <div className="bg-[#fff] shadow-[1px_2px_4px_rgba(0,0,0,0.1)] cursor-pointer">
              <img src={productOil} alt="productOil" />
            </div>
            <div className="bg-[#fff] shadow-[1px_2px_4px_rgba(0,0,0,0.1)] cursor-pointer">
              <img src={productOil} alt="productOil" />
            </div>
            <div className="bg-[#fff] shadow-[1px_2px_4px_rgba(0,0,0,0.1)] cursor-pointer">
              <img src={productOil} alt="productOil" />
            </div>
          </div>
          <div className="relative w-[504px] h-[496px]  mr-[40px] cursor-pointer">
            <Sales className="absolute top-[20px] right-[20px]">-50%</Sales>
            <img
              className="w-[100%] h-[100%]"
              src={productOil}
              alt="productOil"
            />
          </div>
          <div className="w-[376px] mr-[40px]">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <div className="text-[24px] mb-[6px] leading-[150%] text-[#606060]">
                  192,69 ₽
                </div>
                <div className="text-[12px] text-[#BFBFBF] leading-[150%]">
                  Обычная цена
                </div>
              </div>
              <div>
                <div className="text-[#414141] text-[34px] leading-[150%] font-bold">
                  108,99 ₽
                </div>
                <div className="flex items-center gap-[8px] text-[12px] text-[#BFBFBF] leading-[150%]">
                  <span>С картой Северяночки</span>
                  <InfoIcon />
                </div>
              </div>
            </div>
            <Button className="mb-[8px] flex p-[14px_16px] items-center w-[100%] bg-[#FF6633]">
              <ShoppingCart width="32px" height="32px" fill="#fff" />
              <span className="grow text-[24px] leading-[150%] text-[#fff]">
                В корзину
              </span>
            </Button>
            <div className="flex gap-[8px] justify-center items-center mb-[24px]">
              <SmileIcon />
              <span className="text-[#70C05B] flex gap-[4px]">
                <span>Вы получяете</span>
                <span className="font-bold">10 бонусов</span>
              </span>
            </div>
            <div className="flex justify-center w-[100%] gap-[8px] mb-[24px]">
              <BellOf />
              <span className="text-[12px] text-[#606060]">
                Уведомить о снижении цены
              </span>
            </div>
            <div className="text-[12px] leading-[150%]">
              <div className="flex justify-between bg-[#F3F2F1] p-[4px_8px]">
                <div className="text-[#414141]">Бренд</div>
                <div className="font-bold">ПРОСТОКВАШИНО</div>
              </div>
              <div className="flex justify-between p-[4px_8px]">
                <div className="text-[#414141]">Страна производителя</div>
                <div className="font-bold">Россия</div>
              </div>
              <div className="flex justify-between bg-[#F3F2F1] p-[4px_8px]">
                <div className="text-[#414141]">Упаковка</div>
                <div className="font-bold">180 г</div>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-[8px]">Похожие</div>
            <div className="mb-[16px] w-[168px] bg-[#fff] shadow-[1px_2px_4px_rgba(0,0,0,0.1)] cursor-pointer">
              <img src={productSimilar1} alt="img-oil-2" />
              <div className="p-[10px] text-[18px] leading-[150%] font-bold text-[#414141]">
                157,50 ₽
              </div>
            </div>
            <div className="mb-[16px] w-[168px] bg-[#fff] shadow-[1px_2px_4px_rgba(0,0,0,0.1)] cursor-pointer">
              <img src={productSimilar1} alt="img-oil-2" />
              <div className="p-[10px] text-[18px] leading-[150%] font-bold text-[#414141]">
                157,50 ₽
              </div>
            </div>
            <div className="mb-[16px] w-[168px] bg-[#fff] shadow-[1px_2px_4px_rgba(0,0,0,0.1)] cursor-pointer">
              <img src={productSimilar1} alt="img-oil-2" />
              <div className="p-[10px] text-[18px] leading-[150%] font-bold text-[#414141]">
                157,50 ₽
              </div>
            </div>
            <div className="w-[168px] bg-[#fff] shadow-[1px_2px_4px_rgba(0,0,0,0.1)] cursor-pointer">
              <img src={productSimilar1} alt="img-oil-2" />
              <div className="p-[10px] text-[18px] leading-[150%] font-bold text-[#414141]">
                157,50 ₽
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
