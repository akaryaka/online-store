import { Link } from "react-router";
import Container from "@/components/container/Container";
import bannerIcon from "@images/banner-icon.png";
import bannerBg from "@images/banner-bg.png";
import Card from "@/components/card/Card";
import ArrowIcon from "@/components/icons/ArrowIcon";

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
      <main className="bg-[#FBF8EC] pt-[84px] pb-[80px]">
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
              <Card />
              <Card />
              <Card />
              <Card />
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
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className="pt-[80px] ml-[auto] mr-[auto]">
            <header className="flex justify-between items-center mb-[60px]">
              <h2 className="text-[36px] font-bold">Покупали раньше</h2>
              <Link className="flex gap-[18px]" to="/">
                <span>Все покупки</span>
                <ArrowIcon />
              </Link>
            </header>
            <div className="grid gap-[40px] grid-cols-4">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div>
            <h2 className="text-[36px] font-bold mb-[40px]">
              Специальные предложения
            </h2>
          </div>
        </Container>
      </main>
    </>
  );
};

export default Home;
