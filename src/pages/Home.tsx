import { Link } from "react-router";
import Container from "@/components/container/Container";
import bannerIcon from "@images/banner-icon.png";
import bannerBg from "@images/banner-bg.png";
import Card from "@/components/card/Card";
import ArrowIcon from "@/components/icons/ArrowIcon";
import loyalCardIcon from "@images/loyalty-card.png";
import loyalCardIcon2 from "@images/loyalty-card2.png";
import articleImage from "@images/article.png";
import product1 from "@images/product1.png";
import product2 from "@images/product2.png";
import product3 from "@images/product3.png";
import product4 from "@images/product4.png";
import ButtonSecondary from "@/components/button/secondary/Button";
import ButtonGreyscale from "@/components/button/greyscale/Button";

const Home = () => {
  return (
    <>
      <div
        className="banner h-[200px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bannerBg}')` }}
      >
        <Container>
          <div className="hero__innner pr-[67px] pl-[55px] flex justify-between">
            <img src={bannerIcon} alt="hero-icon" />
            <h1 className="text-[48px] p-[64px_0px] font-bold text-[#414141]">
              Доставка бесплатно от 1000 ₽
            </h1>
          </div>
        </Container>
      </div>
      <div className="pt-[84px] pb-[80px]">
        <Container>
          <div className="ml-[auto] mr-[auto]">
            <header className="flex justify-between items-center mb-[40px] pr-[7px]">
              <h2 className="text-[36px] font-bold">Акции</h2>
              <Link className="flex leading-[150%] gap-[29px] mt-[12px]" to="/">
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
          <div className="pt-[80px] ml-[auto] mr-[auto]">
            <header className="flex justify-between items-center mb-[60px]">
              <h2 className="text-[36px] font-bold">Новинки</h2>
              <Link className="flex gap-[18px]" to="/">
                <span>Все новинки</span>
                <ArrowIcon />
              </Link>
            </header>
            <div className="grid gap-[40px] grid-cols-4">
              <Card img={product1} rating={2} />
              <Card img={product1} rating={2} />
              <Card img={product1} rating={2} />
              <Card img={product1} rating={2} />
            </div>
          </div>
          <div className="pt-[80px] mb-[120px] ml-[auto] mr-[auto]">
            <header className="flex justify-between items-center mb-[60px]">
              <h2 className="text-[36px] font-bold">Покупали раньше</h2>
              <Link className="flex gap-[18px]" to="/">
                <span>Все покупки</span>
                <ArrowIcon />
              </Link>
            </header>
            <div className="grid gap-[40px] grid-cols-4">
              <Card img={product1} rating={2} />
              <Card img={product1} rating={2} />
              <Card img={product1} rating={2} />
              <Card img={product1} rating={2} />
            </div>
          </div>
          <div className="mb-[120px]">
            <h2 className="text-[36px] font-bold mb-[40px]">
              Специальные предложения
            </h2>
            <div className="flex justify-between gap-[40px]">
              <div className="flex items-center h-[200px] rounded-[4px] pl-[40px] pt-[18px] pb-[19px] pr-[31px] w-50% bg-[#FCD5BA] transition-all cursor-pointer hover:shadow-[0px_8px_16px_rgba(202,147,96,0.5)]">
                <div className="w-[258px] mr-[21px]">
                  <h3 className="text-[24px] leading-[150%] text-[#414141] font-bold mb-[6px]">
                    Оформите карту «Северяночка»
                  </h3>
                  <p className="text-[16px] leading-[150%] text-[#414141]">
                    И получайте бонусы при покупке в магазинах и на сайте
                  </p>
                </div>
                <div>
                  <img
                    className="rotate-[14deg] hover:shadow-[0px_8px_47px_rgba(200,90,53,0.51)] transition-all"
                    src={loyalCardIcon}
                    alt="card-icon"
                  />
                </div>
              </div>
              <div className="flex items-center h-[200px] rounded-[4px] pl-[40px] pt-[18px] pb-[19px] pr-[31px] w-50% bg-[#E5FFDE] transition-all cursor-pointer hover:shadow-[4px_8px_16px_rgba(112,192,91,0.2)]">
                <div className="w-[258px] mr-[21px]">
                  <h3 className="text-[24px] leading-[150%] text-[#414141] font-bold mb-[6px]">
                    Покупайте акционные товары
                  </h3>
                  <p className="text-[16px] leading-[150%] text-[#414141]">
                    И получайте вдвое больше бонусов
                  </p>
                </div>
                <div>
                  <img src={loyalCardIcon2} alt="card-icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-[120px]">
            <h2 className="text-[36px] font-bold mb-[40px]">Наши магазины</h2>
            <div className="flex gap-[24px] mb-[24px]">
              <ButtonSecondary>п.Щельяюр</ButtonSecondary>
              <ButtonGreyscale>д.Вертеп</ButtonGreyscale>
              <ButtonGreyscale>с.Краснобор</ButtonGreyscale>
              <ButtonGreyscale>д.Диюр</ButtonGreyscale>
            </div>
            <div className="h-[354px] w-[100%] bg-[grey]"></div>
          </div>
          <div>
            <header className="flex justify-between items-center mb-[60px]">
              <h2 className="text-[36px] font-bold">Статьи</h2>
              <Link className="flex gap-[18px]" to="/">
                <span>Все статьи</span>
                <ArrowIcon />
              </Link>
            </header>
            <div className="flex gap-[40px]">
              <div className="w-[376px] bg-[#fff] rounded-[4px] cursor-pointer hover:shadow-[4px_8px_16px_rgba(255,102,51,0.2)] transition-all">
                <img
                  className="rounded-tl-[4px] rounded-tr-[4px]"
                  src={articleImage}
                  alt="article-image"
                />
                <div className="p-[10px]">
                  <div className="text-[12px] leading-[150%] text-[#8F8F8F] mb-[10px]">
                    05.03.2021
                  </div>
                  <div className="text-[18px] leading-[150%] text-[#414141] font-bold mb-[10px]">
                    Режим использования масок и перчаток на территории магазинов
                  </div>
                  <div className="text-[16px] leading-[150%] text-[#414141] mb-[10px]">
                    Подробная информация о режимах использования масок и
                    перчаток на территории магазинов "ЛЕНТА". Информация
                    обновляется каждый будний день.
                  </div>
                  <button className="p-[8px_16px] rounded-[4px] bg-[#E5FFDE] text-[16px] leading-[150%] text-[#70C05B] cursor-pointer transition-all hover:bg-[#70C05B] hover:text-[#fff]">
                    Подробнее
                  </button>
                </div>
              </div>
              <div className="w-[376px] bg-[#fff] rounded-[4px] cursor-pointer hover:shadow-[4px_8px_16px_rgba(255,102,51,0.2)] transition-all">
                <img
                  className="rounded-tl-[4px] rounded-tr-[4px]"
                  src={articleImage}
                  alt="article-image"
                />
                <div className="p-[10px]">
                  <div className="text-[12px] leading-[150%] text-[#8F8F8F] mb-[10px]">
                    05.03.2021
                  </div>
                  <div className="text-[18px] leading-[150%] text-[#414141] font-bold mb-[10px]">
                    Режим использования масок и перчаток на территории магазинов
                  </div>
                  <div className="text-[16px] leading-[150%] text-[#414141] mb-[10px]">
                    Подробная информация о режимах использования масок и
                    перчаток на территории магазинов "ЛЕНТА". Информация
                    обновляется каждый будний день.
                  </div>
                  <button className="p-[8px_16px] rounded-[4px] bg-[#E5FFDE] text-[16px] leading-[150%] text-[#70C05B] cursor-pointer transition-all hover:bg-[#70C05B] hover:text-[#fff]">
                    Подробнее
                  </button>
                </div>
              </div>
              <div className="w-[376px] bg-[#fff] rounded-[4px] cursor-pointer hover:shadow-[4px_8px_16px_rgba(255,102,51,0.2)] transition-all">
                <img
                  className="rounded-tl-[4px] rounded-tr-[4px]"
                  src={articleImage}
                  alt="article-image"
                />
                <div className="p-[10px]">
                  <div className="text-[12px] leading-[150%] text-[#8F8F8F] mb-[10px]">
                    05.03.2021
                  </div>
                  <div className="text-[18px] leading-[150%] text-[#414141] font-bold mb-[10px]">
                    Режим использования масок и перчаток на территории магазинов
                  </div>
                  <div className="text-[16px] leading-[150%] text-[#414141] mb-[10px]">
                    Подробная информация о режимах использования масок и
                    перчаток на территории магазинов "ЛЕНТА". Информация
                    обновляется каждый будний день.
                  </div>
                  <button className="p-[8px_16px] rounded-[4px] bg-secondary-muted text-[16px] leading-[150%] text-[#70C05B] cursor-pointer transition-all hover:bg-secondary hover:text-[#fff]">
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
