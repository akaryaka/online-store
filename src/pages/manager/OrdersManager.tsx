import Button from "@shared/ui/button";
import Container from "@/widgets/container";
import Crumbs from "@/widgets/crumbs";
import Title from "@/shared/ui/title";
import CalendarIcon from "@/widgets/icons/CalendarIcon";
import Layout from "@app/layout";
import OrderItems from "./ui/OrderItems";
import OrderCounterBtn from "./ui/OrderCounterBtn";

const OrdersManager = () => {
  return (
    <>
      <Layout title="Менеджер | Заказы">
        <div className="pt-[24px] pb-[80px]">
          <Container>
            <div className="mb-[24px]">
              <Crumbs page="Заказы" />
            </div>
            <div className="relative inline-block mb-[32px]">
              <Title size="m">
                <span>Заказы</span>
              </Title>
              <span className="absolute inline-flex items-start justify-start right-[-40px] top-[0] w-[36px] h-[32px] text-[#fff] bg-[#FF6633] text-[16px] font-normal p-[4px_8px] rounded-[4px]">
                <span>30</span>
              </span>
            </div>
            <div className="flex gap-[16px] mb-[60px]">
              <Button
                icon={<CalendarIcon />}
                type="icon-btn"
                size="l"
                accent="greyscale"
                className="w-[60px] flex justify-center items-center"
              />
              <OrderCounterBtn
                type="text-btn"
                size="l"
                date="Сегодня"
                accent="secondary"
                count="10"
                dateSize="l"
                countSize="s"
                className="p-[14px_16px] gap-[16px]"
              />
              <OrderCounterBtn
                type="text-btn"
                size="l"
                date="1 апреля"
                accent="greyscale"
                count="2"
                dateSize="l"
                countSize="s"
                className="p-[14px_16px] gap-[16px]"
              />
              <OrderCounterBtn
                type="text-btn"
                size="l"
                date="5 апреля"
                accent="greyscale"
                count="1"
                dateSize="l"
                countSize="s"
                className="p-[14px_16px] gap-[16px]"
              />
            </div>
            <OrderItems />
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default OrdersManager;
