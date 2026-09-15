import { Link } from "react-router";
import Container from "@/components/container/Container";
import bannerIcon from "@images/banner-icon.png";
import bannerBg from "@images/banner-bg.png";
import Card from "@/components/card/Card";

const Home = () => {
  return (
    <>
      <div
        className="banner h-[200px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bannerBg}')` }}
      >
        <Container>
          <div className="hero__innner pr-[69px]  flex justify-between items-center">
            <img src={bannerIcon} alt="hero-icon" />
            <h1 className="text-[48px]">Доставка бесплатно от 1000 ₽</h1>
          </div>
        </Container>
      </div>
      <main className="bg-[#FBF8EC] pt-[80px] pb-[80px]">
        <Container>
          <div className="ml-[auto] mr-[auto]">
            <header className="flex justify-between items-center mb-[60px]">
              <h2 className="text-[64px] font-bold">Акции</h2>
              <Link className="flex gap-[18px]" to="/">
                <span>Все акции</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z"
                    fill="#606060"
                  />
                </svg>
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
              <h2 className="text-[64px] font-bold">Новинки</h2>
              <Link className="flex gap-[18px]" to="/">
                <span>Все новинки</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z"
                    fill="#606060"
                  />
                </svg>
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
              <h2 className="text-[64px] font-bold">Покупали раньше</h2>
              <Link className="flex gap-[18px]" to="/">
                <span>Все покупки</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z"
                    fill="#606060"
                  />
                </svg>
              </Link>
            </header>
            <div className="grid gap-[40px] grid-cols-4">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default Home;
