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
        className="banner h-[200px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bannerBg}')` }}
      >
        <Container>
          {/* не по pixelp */}
          <div className="hero__innner pr-[57px] pl-[47px] flex justify-between items-center">
            <img src={bannerIcon} alt="hero-icon" />
            <Title size="l" className=" ">
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

  function bannerAnimation() {
    setTimeout(() => {
      setBanner(SecondBanner);
    }, 3000);
  }

  useEffect(() => {
    bannerAnimation();
  }, []);

  return <>{banner}</>;
};

export default HomeBanner;
