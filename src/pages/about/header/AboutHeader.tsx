import ImgAbout from "@images/img-about.png";
import BgAbout from "@images/bg-about.png";
import Title from "@/shared/ui/title/Title";
import Container from "@/widgets/container/Container";

const AboutHeader = () => {
  return (
    <>
      <div
        className="w-[1445px] m-[0_auto] h-[432px] mb-[111px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${BgAbout}')` }}
      >
        <Container>
          <div className="flex items-center pl-[30px]">
            <div>
              <Title className="mb-[16px]">О компании</Title>
              <p className="w-[580px] text-[24px] leading-[150%] text-[#FF6633] font-bold">
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
    </>
  );
};

export default AboutHeader;
