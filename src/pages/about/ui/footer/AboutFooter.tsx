import Container from "@/widgets/container/Container";
import LogoAbout from "@images/logo-about.png";
import QuoteAbout from "@images/quote.png";

const AboutFooter = () => {
  return (
    <>
      <div>
        <Container>
          <div className="flex items-center gap-[40px] text-[#70C05B] font-bold leading-[150%] pl-[98px] pr-[98px]">
            <img src={LogoAbout} alt="logo-about" />
            <div
              style={{ backgroundImage: `url(${QuoteAbout})` }}
              className="w-[845px] pl-[30px] h-[96px] flex justify-center items-center bg-cover bg-center bg-no-repeat text-[24px]"
            >
              Спасибо за то, что вы с нами. Северяночка, везет всегда!
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutFooter;
