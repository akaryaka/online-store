import Button from "@shared/ui/button/Button";
import Container from "@/widgets/container/Container";
import Crumbs from "@/widgets/crumbs/Crumbs";
import LocationIcon from "@/widgets/icons/contacts/LocationIcon";
import PercentIcon from "@/widgets/icons/contacts/PercentIcon";
import Phone from "@shared/ui/phone/Phone";
import Title from "@/shared/ui/title/Title";
import { Helmet } from "react-helmet-async";
import Layout from "@app/layout/Layout";
import MarketIcon1 from "@/widgets/icons/contactsPage/MarketIcon1";
import MarketIcon2 from "@/widgets/icons/contactsPage/MarketIcon2";
import MarketIcon3 from "@/widgets/icons/contactsPage/MarketIcon3";
import MarketIcon4 from "@/widgets/icons/contactsPage/MarketIcon4";

const Contacts = () => {
  return (
    <>
      <Helmet>
        <title>Контакты</title>
      </Helmet>
      <Layout>
        <div className="pb-[80px]">
          <Container>
            <div className="p-[24px_0px]">
              <Crumbs page="Контакты" />
            </div>
            <Title className="mb-[40px]">Контакты</Title>
            <div className="flex mb-[120px] gap-[80px]">
              <div>
                <div className="flex items-center gap-[8px] mb-[16px]">
                  <LocationIcon />
                  <span className="text-[24px] leading-[150%] text-[#414141]">
                    Бухгалтерия, склад
                  </span>
                </div>
                <a
                  className="underline leading-[150%] text-[#414141] text-[24px] font-bold ml-[38px]"
                  href="tel:+7 82140 92619"
                >
                  +7 82140 92619
                </a>
              </div>
              <div>
                <div className="flex items-center gap-[8px] mb-[16px]">
                  <PercentIcon />
                  <span className="text-[24px] leading-[150%] text-[#414141]">
                    Вопросы по системе лояльности
                  </span>
                </div>
                <a
                  className="underline leading-[150%] text-[#414141] text-[24px] font-bold ml-[38px]"
                  href="tel:+7 908 716 33 97"
                >
                  +7 908 716 33 97
                </a>
              </div>
            </div>
            <h2 className="text-[36px] leading-[150%] font-bold text-[#414141] mb-[40px]">
              Наши магазины
            </h2>
            <div className="flex gap-[24px] mb-[32px]">
              <Button className="text-[#fff] bg-[#70C05B]">п.Щельяюр</Button>
              <Button className="text-[#606060] bg-[#F3F2F1]">д.Вертеп</Button>
              <Button className="text-[#606060] bg-[#F3F2F1]">
                с.Краснобор
              </Button>
              <Button className="text-[#606060] bg-[#F3F2F1]">д.Диюр</Button>
            </div>
            <div className="flex gap-[80px] mb-[32px]">
              <div>
                <div className="mb-[8px]">
                  <MarketIcon1 />
                </div>
                <div className="flex items-center gap-[8px] mb-[8px]">
                  <LocationIcon />
                  <span className="text-[18px] leading-[150%] text-[#414141]">
                    ул. Дорожная 10
                  </span>
                </div>
                <Phone number="+7 904 271 35 90" />
              </div>
              <div>
                <div className="mb-[8px]">
                  <MarketIcon2 />
                </div>
                <div className="flex items-center gap-[8px] mb-[8px]">
                  <LocationIcon />
                  <span className="text-[18px] leading-[150%] text-[#414141]">
                    ул. Советская 87
                  </span>
                </div>
                <Phone number="+7 82140 91330" />
              </div>
              <div>
                <div className="mb-[8px]">
                  <MarketIcon3 />
                </div>
                <div className="flex items-center gap-[8px] mb-[8px]">
                  <LocationIcon />
                  <span className="text-[18px] leading-[150%] text-[#414141]">
                    ул. Заводская 16
                  </span>
                </div>
                <Phone number="+7 82140 91101" />
              </div>
              <div>
                <div className="mb-[8px]">
                  <MarketIcon4 />
                </div>
                <div className="flex items-center gap-[8px] mb-[8px]">
                  <LocationIcon />
                  <span className="text-[18px] leading-[150%] text-[#414141]">
                    ул. Рабочая 1
                  </span>
                </div>
                <Phone number="+7 82140 91300" />
              </div>
            </div>
            <div className="map w-[100%] h-[354px] bg-[grey]"></div>
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default Contacts;
