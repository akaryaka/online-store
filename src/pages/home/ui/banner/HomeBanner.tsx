import Container from "@/widgets/container/Container";
import bannerIcon from "@images/banner-icon.png";
import bannerBg from "@images/banner-bg.png";
import Title from "@/shared/ui/title";

const HomeBanner = () => {
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

export default HomeBanner;
