import Container from "@/widgets/container/Container";
import Crumbs from "@/widgets/crumbs/Crumbs";
import Title from "@/shared/ui/title/Title";
import LogoAbout from "@images/logo-about.png";
import ImgAbout from "@images/img-about.png";
import BgAbout from "@images/bg-about.png";
import QuoteAbout from "@images/quote.png";
import Layout from "@app/layout/Layout";
import { Helmet } from "react-helmet-async";
import CheckIcon from "@/widgets/icons/aboutPage/CheckIcon";

const About = () => {
  return (
    <>
      <Helmet>
        <title>О компании</title>
      </Helmet>
      <Layout>
        <div className="pt-[24px] pb-[80px]">
          <Container>
            <Crumbs page="О компании" />
          </Container>
          <div
            className="w-[1445px] m-[0_auto] h-[432px] mb-[111px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${BgAbout}')` }}
          >
            <Container>
              <div className="flex items-center pl-[30px]">
                <div>
                  <Title className="mb-[16px]">О компании</Title>
                  <p className="w-[567px] text-[24px] leading-[150%] text-[#FF6633] font-bold">
                    Мы непрерывно развиваемся и <br /> работаем над
                    совершенствованием сервиса, <br /> заботимся о наших
                    клиентах, <br />
                    стремимся к лучшему будущему.
                  </p>
                </div>
                <div className="pt-[30px] w-[700px]">
                  <img className="w-[100%]" src={ImgAbout} alt="img-about" />
                </div>
              </div>
            </Container>
          </div>
          <div className="mb-[120px]">
            <Container>
              <div className="flex gap-[75px]">
                <div className="flex w-[257px] gap-[10px]">
                  <div>
                    <CheckIcon />
                  </div>
                  <div className="w-[257px]">
                    <div className="text-[20px] leading-[150%] text-[#414141] mb-[16px]">
                      Мы занимаемся розничной торговлей
                    </div>
                    <div className="text-[24px] leading-[150%] text-[#414141] font-bold">
                      Более 20 лет.
                    </div>
                  </div>
                </div>
                <div className="flex w-[355px] gap-[10px]">
                  <div>
                    <CheckIcon />
                  </div>
                  <div className="">
                    <div className="text-[20px] leading-[150%] text-[#414141] mb-[16px]">
                      Основная миссия компании
                    </div>
                    <div className="text-[24px] leading-[150%] text-[#414141] font-bold">
                      Максимальное качество товаров и услуг по доступной цене.
                    </div>
                  </div>
                </div>
                <div className="flex w-[445px] gap-[10px]">
                  <div>
                    <CheckIcon />
                  </div>
                  <div>
                    <div className="text-[20px] leading-[150%] text-[#414141] mb-[16px]">
                      Отличительная черта нашей сети
                    </div>
                    <div className="text-[24px] leading-[150%] text-[#414141] font-bold">
                      Здоровая и полезная продукция местного производства внаших
                      магазинах.
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
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
        </div>
      </Layout>
    </>
  );
};

export default About;
