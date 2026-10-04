import Layout from "@/app/layout/Layout";
import Container from "@/widgets/container/Container";
import { Link } from "react-router";
import ArrowIcon from "@/widgets/icons/ArrowIcon";
import Card from "@/widgets/card/CardSale";
import product1 from "@images/product1.png";
import product2 from "@images/product2.png";
import product3 from "@images/product3.png";
import product4 from "@images/product4.png";
import productSimilar1 from "@images/product-silimilar1.png";
import UserAccount from "@/shared/ui/userAccount/UserAccount";
import Stars from "@/widgets/icons/stars/Stars";
import Button from "@/shared/ui/button/Button";
import productOil from "@images/product-oil-big.png";
import FavoritesIcon from "@/widgets/icons/FavoritesIcon";
import SharedIcon from "@/widgets/icons/SharedIcon";
import ShoppingCart from "@/widgets/icons/ShoppingCart";
import Sales from "@/shared/ui/sales/Sales";
import InfoIcon from "@/widgets/icons/InfoIcon";
import SmileIcon from "@/widgets/icons/SmileIcont";
import BellOf from "@/widgets/icons/BellOf";

const Product = () => {
  return (
    <>
      <Layout title="Товар">
        <div className="pt-[24px] pb-[80px]">
          <Container>
            <div className="mb-[24px]">
              <div className="flex items-center gap-[10px]">
                <Link
                  className="leading-[150%] text-[12px] text-[#414141]"
                  to="/"
                >
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
                  Масло ПРОСТОКВАШИНО сливочное в/с 82% фольга без змж, Россия,
                  180 г
                </Link>
              </div>
            </div>
            <div className="mb-[120px]">
              <h1 className="text-[24px] leading-[150%] font-bold text-[#414141] mb-[16px]">
                Масло ПРОСТОКВАШИНО сливочное в/с 82% фольга без змж, Россия,
                180 г
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
                  <Sales className="absolute top-[20px] right-[20px]">
                    -50%
                  </Sales>
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
            <div className="ml-[auto] mr-[auto] mb-[120px]">
              <header className="flex justify-between items-center mb-[40px] pr-[7px]">
                <h2 className="text-[36px] font-bold">
                  С этим товаров покупают
                </h2>
              </header>
              <div className="grid gap-[40px] grid-cols-4">
                <Card img={product1} rating={2} />
                <Card img={product2} rating={3} />
                <Card img={product3} rating={5} />
                <Card img={product4} rating={4} />
              </div>
            </div>
            <div className="reviews mb-[120px]">
              <header className="flex justify-between items-center mb-[40px] pr-[7px]">
                <h2 className="text-[36px] font-bold">Отзывы</h2>
              </header>
              <div className="flex">
                <div className="w-[168px] mr-[144px]">
                  <header className="flex justify-between items-center mb-[16px]">
                    <Stars rating={4} />
                    <div className="text-[18px] text-[#414141] font-bold leading-[150%]">
                      4 из 5
                    </div>
                  </header>
                  <div className="w-[100%]">
                    <div className="flex justify-between items-center gap-[16px] mb-[8px]">
                      <div className="text-[16px] leading-[150%] text-[#414141]">
                        5
                      </div>
                      <Stars rating={5} />
                      <div className="text-[16px] leading-[150%] text-[#414141]">
                        1
                      </div>
                    </div>
                    <div className="flex justify-between items-center gap-[16px] mb-[8px]">
                      <div className="text-[16px] leading-[150%] text-[#414141]">
                        4
                      </div>
                      <Stars rating={4} />
                      <div className="text-[16px] leading-[150%] text-[#414141]">
                        1
                      </div>
                    </div>
                    <div className="flex justify-between items-center gap-[16px] mb-[8px]">
                      <div className="text-[16px] leading-[150%] text-[#414141]">
                        3
                      </div>
                      <Stars rating={3} />
                      <div className="text-[16px] leading-[150%] text-[#414141]">
                        1
                      </div>
                    </div>
                    <div className="flex justify-between items-center gap-[16px] mb-[8px]">
                      <div className="text-[16px] leading-[150%] text-[#414141]">
                        2
                      </div>
                      <Stars rating={2} />
                      <div className="text-[16px] leading-[150%] text-[#414141]">
                        1
                      </div>
                    </div>
                    <div className="flex justify-between items-center gap-[16px] mb-[8px]">
                      <div className="text-[16px] leading-[150%] text-[#414141]">
                        1
                      </div>
                      <Stars rating={1} />
                      <div className="text-[16px] leading-[150%] text-[#414141]">
                        1
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[688px]">
                  <div className="message mb-[40px]">
                    <div className="mb-[8px]">
                      <UserAccount name="Татьяна" />
                    </div>
                    <div className="flex items-center gap-[16px] mb-[9px]">
                      <Stars rating={5} />
                      <div className="text-[#8F8F8F] text-[12px] leading-[150%]">
                        22.02.2020
                      </div>
                    </div>
                    <div className="text-[#414141]">приятный вкус</div>
                  </div>
                  <div className="message mb-[40px]">
                    <div className="mb-[8px]">
                      <UserAccount name="Мария" />
                    </div>
                    <div className="flex items-center gap-[16px] mb-[9px]">
                      <Stars rating={4} />
                      <div className="text-[#8F8F8F] text-[12px] leading-[150%]">
                        22.02.2020
                      </div>
                    </div>
                    <div className="text-[#414141]">
                      Масло среднее, есть вкуснее
                    </div>
                  </div>
                  <div className="message mb-[40px]">
                    <div className="mb-[8px]">
                      <UserAccount name="Алексей" />
                    </div>
                    <div className="flex items-center gap-[16px] mb-[9px]">
                      <Stars rating={1} />
                      <div className="text-[#8F8F8F] text-[12px] leading-[150%]">
                        22.02.2020
                      </div>
                    </div>
                    <div className="text-[#414141]">
                      Покупали в том числе в этом весе. Масло по вкусу и
                      органолептическим свойствам совершенно не похоже на
                      натуральное. Упаковка выглядит как напечатанная на дешёвом
                      принтере. На наш взгляд продукт является подделкой или
                      контрафактной продукцией. Просим разобраться.
                    </div>
                  </div>
                  <div>
                    <header className="flex items-center gap-[16px] mb-[19px]">
                      <div className="font-bold text-[18px] leading-[150%] text-[#414141]">
                        Ваша оценка
                      </div>
                      <div>
                        <Stars rating={0} />
                      </div>
                    </header>
                    <textarea
                      className="border border-[#BFBFBF] w-[100%] bg-[#fff] p-[8px_16px] rounded-[4px] mb-[16px]"
                      name=""
                      id=""
                    >
                      sd
                    </textarea>
                    <Button className="bg-[#FCD5BA] text-[#FF6633]">
                      Отправить отзыв
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-[auto] mr-[auto]">
              <header className="flex justify-between items-center mb-[40px] pr-[7px]">
                <h2 className="text-[36px] font-bold">Акции</h2>
                <Link
                  className="flex leading-[150%] gap-[29px] mt-[12px]"
                  to="/"
                >
                  <span>Все акции</span>
                  <ArrowIcon />
                </Link>
              </header>
              <div className="grid gap-[40px] grid-cols-4">
                <Card img={product1} rating={2} />
                <Card img={product2} rating={3} />
                <Card img={product3} rating={5} />
                <Card img={product4} rating={4} />
              </div>
            </div>
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default Product;
