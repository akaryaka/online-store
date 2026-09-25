import Container from "@/components/container/Container";
import Crumbs from "@/components/crumbs/Crumbs";
import Title from "@/components/title/Title";
import LogoAbout from "@images/logo-about.png";
import ImgAbout from "@images/img-about.png";
import BgAbout from "@images/bg-about.png";
import QuoteAbout from "@images/quote.png";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>О компании</title>
      </Helmet>
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
                  совершенствованием сервиса, <br /> заботимся о наших клиентах,{" "}
                  <br />
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
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.47265 23.0891C3.47265 17.325 0.486816 13.3666 0.486816 10.5891C0.486816 7.81162 2.08348 1.97746 14.861 1.97746C27.6385 1.97746 29.5135 9.82496 29.5135 12.88C29.5143 27.1858 3.47265 33.2975 3.47265 23.0891Z"
                      fill="#FCD5BA"
                    />
                    <path
                      d="M13.0904 20.9341C12.9337 21.0908 12.722 21.1783 12.5012 21.1783C12.2804 21.1783 12.0679 21.0908 11.912 20.9341L6.91203 15.9341C6.5862 15.6083 6.58703 15.0808 6.91203 14.7558L8.09036 13.5775C8.4162 13.2516 8.9437 13.2516 9.2687 13.5775L12.5012 16.8091L20.7337 8.57746C21.0595 8.25163 21.587 8.25163 21.912 8.57746L23.0904 9.75579C23.4162 10.0816 23.4162 10.6091 23.0904 10.9341L13.0904 20.9341Z"
                      fill="#FF6633"
                    />
                    <path
                      d="M8.78588 15.9339C8.46005 15.6081 8.46088 15.0806 8.78588 14.7556L9.61588 13.9255L9.26755 13.5772C8.94171 13.2514 8.41421 13.2514 8.08921 13.5772L6.91088 14.7556C6.58505 15.0814 6.58505 15.6089 6.91088 15.9339L11.9109 20.9339C12.0675 21.0906 12.2792 21.1781 12.5 21.1781C12.7209 21.1781 12.9334 21.0906 13.0892 20.9339L13.4375 20.5856L8.78588 15.9339Z"
                      fill="black"
                      fill-opacity="0.1"
                    />
                  </svg>
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
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.47265 23.0891C3.47265 17.325 0.486816 13.3666 0.486816 10.5891C0.486816 7.81162 2.08348 1.97746 14.861 1.97746C27.6385 1.97746 29.5135 9.82496 29.5135 12.88C29.5143 27.1858 3.47265 33.2975 3.47265 23.0891Z"
                      fill="#FCD5BA"
                    />
                    <path
                      d="M13.0904 20.9341C12.9337 21.0908 12.722 21.1783 12.5012 21.1783C12.2804 21.1783 12.0679 21.0908 11.912 20.9341L6.91203 15.9341C6.5862 15.6083 6.58703 15.0808 6.91203 14.7558L8.09036 13.5775C8.4162 13.2516 8.9437 13.2516 9.2687 13.5775L12.5012 16.8091L20.7337 8.57746C21.0595 8.25163 21.587 8.25163 21.912 8.57746L23.0904 9.75579C23.4162 10.0816 23.4162 10.6091 23.0904 10.9341L13.0904 20.9341Z"
                      fill="#FF6633"
                    />
                    <path
                      d="M8.78588 15.9339C8.46005 15.6081 8.46088 15.0806 8.78588 14.7556L9.61588 13.9255L9.26755 13.5772C8.94171 13.2514 8.41421 13.2514 8.08921 13.5772L6.91088 14.7556C6.58505 15.0814 6.58505 15.6089 6.91088 15.9339L11.9109 20.9339C12.0675 21.0906 12.2792 21.1781 12.5 21.1781C12.7209 21.1781 12.9334 21.0906 13.0892 20.9339L13.4375 20.5856L8.78588 15.9339Z"
                      fill="black"
                      fill-opacity="0.1"
                    />
                  </svg>
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
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.47265 23.0891C3.47265 17.325 0.486816 13.3666 0.486816 10.5891C0.486816 7.81162 2.08348 1.97746 14.861 1.97746C27.6385 1.97746 29.5135 9.82496 29.5135 12.88C29.5143 27.1858 3.47265 33.2975 3.47265 23.0891Z"
                      fill="#FCD5BA"
                    />
                    <path
                      d="M13.0904 20.9341C12.9337 21.0908 12.722 21.1783 12.5012 21.1783C12.2804 21.1783 12.0679 21.0908 11.912 20.9341L6.91203 15.9341C6.5862 15.6083 6.58703 15.0808 6.91203 14.7558L8.09036 13.5775C8.4162 13.2516 8.9437 13.2516 9.2687 13.5775L12.5012 16.8091L20.7337 8.57746C21.0595 8.25163 21.587 8.25163 21.912 8.57746L23.0904 9.75579C23.4162 10.0816 23.4162 10.6091 23.0904 10.9341L13.0904 20.9341Z"
                      fill="#FF6633"
                    />
                    <path
                      d="M8.78588 15.9339C8.46005 15.6081 8.46088 15.0806 8.78588 14.7556L9.61588 13.9255L9.26755 13.5772C8.94171 13.2514 8.41421 13.2514 8.08921 13.5772L6.91088 14.7556C6.58505 15.0814 6.58505 15.6089 6.91088 15.9339L11.9109 20.9339C12.0675 21.0906 12.2792 21.1781 12.5 21.1781C12.7209 21.1781 12.9334 21.0906 13.0892 20.9339L13.4375 20.5856L8.78588 15.9339Z"
                      fill="black"
                      fill-opacity="0.1"
                    />
                  </svg>
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
    </>
  );
};

export default About;
