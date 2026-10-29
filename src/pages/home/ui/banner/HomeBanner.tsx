import Container from "@/widgets/container/Container";
import bannerIcon from "@images/banner-icon.png";
import bannerBg from "@images/banner-bg.png";
import bannerBg2 from "@images/banner-2.png";
import Title from "@/shared/ui/title";
import { useEffect, useState } from "react";

const FirstBanner = () => {
  return (
    <>
      <div
        className="banner h-[200px] max-[1300px]:h-[160px] max-[1300px]:items-end bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bannerBg}')` }}
      >
        <Container className="max-[1300px]:h-[100%]">
          {/* не по pixelp */}
          <div className="hero__innner max-[1300px]:h-[100%] pr-[57px] pl-[47px] max-[1300px]:pr-[0] max-[1300px]:pl-[0] max-[1300px]:justify-center flex justify-between items-center">
            <img
              className="max-[1300px]:hidden"
              src={bannerIcon}
              alt="hero-icon"
            />
            <img
              className="hidden max-[1300px]:block max-[1300px]:self-end max-[767px]:hidden"
              width={198}
              height={132}
              src={bannerIcon}
              alt="hero-icon"
            />
            <Title size="l" className="max-[1300px]:hidden">
              Доставка бесплатно от 1000 ₽
            </Title>
            <Title
              size="s"
              className="hidden max-[1300px]:block max-[1300px]:mt-[20px]"
            >
              Доставка бесплатно от 1000 ₽
            </Title>
          </div>
        </Container>
      </div>
    </>
  );
};

const SecondBanner = () => {
  return (
    <>
      <div
        className="banner h-[200px] bg-center  bg-contain w-[100%] bg-no-repeat"
        style={{ backgroundImage: `url('${bannerBg2}')` }}
      ></div>
    </>
  );
};

const HomeBanner = () => {
  const arrBanner = [FirstBanner, SecondBanner];
  const [banner, setBanner] = useState(arrBanner[0]);

  // function bannerAnimation() {
  //   setTimeout(() => {
  //     setBanner(SecondBanner);
  //   }, 3000);
  // }

  // useEffect(() => {
  //   bannerAnimation();
  // }, []);

  return <>{banner}</>;
};

export default HomeBanner;
