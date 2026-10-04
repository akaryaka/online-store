import Container from "@/widgets/container/Container";
import bannerIcon from "@images/banner-icon.png";
import bannerBg from "@images/banner-bg.png";

const HomeBanner = () => {
  return (
    <>
      <div
        className="banner h-[200px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bannerBg}')` }}
      >
        <Container>
          <div className="hero__innner pr-[67px] pl-[55px] flex justify-between">
            <img src={bannerIcon} alt="hero-icon" />
            <h1 className="text-[46px] p-[64px_0px] font-bold text-[#414141]">
              Доставка бесплатно от 1000 ₽
            </h1>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomeBanner;
