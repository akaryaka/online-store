import Button from "@shared/ui/button";
import Container from "@/widgets/container";
import Crumbs from "@/widgets/crumbs";
import Title from "@/shared/ui/title";
import cn from "classnames";
import CalendarIcon from "@/widgets/icons/CalendarIcon";
import Layout from "@app/layout";
import OrderItems from "./ui/OrderItems";
import type { DayBtnProps } from "./models/DayBtn.props";

const ActiveDayBtn = ({ date, count, className, ...props }: DayBtnProps) => {
  return (
    <>
      <Button
        className={cn("bg-[#70C05B] flex items-center gap-[8px]", className, {
          ...props,
        })}
      >
        <span className="text-[#fff]">{date}</span>
        <span className="inline-flex w-[33px] h-[32px] text-[#fff] bg-[#FF6633] text-[16px] font-normal p-[4px_8px] rounded-[4px]">
          <span>{count}</span>
        </span>
      </Button>
    </>
  );
};

const DayBtn = ({ date, count, className, ...props }: DayBtnProps) => {
  return (
    <>
      <Button
        className={cn("bg-[#F3F2F1] flex items-center gap-[8px]", className, {
          ...props,
        })}
      >
        <span className="text-[#606060]">{date}</span>
        <span className="inline-flex text-[#fff] bg-[#FF6633] text-[16px] font-normal p-[4px_8px] rounded-[4px]">
          <span>{count}</span>
        </span>
      </Button>
    </>
  );
};

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
              <Title>
                <span>Заказы</span>
              </Title>
              <span className="absolute inline-flex items-start justify-start right-[-40px] top-[0] w-[36px] h-[32px] text-[#fff] bg-[#FF6633] text-[16px] font-normal p-[4px_8px] rounded-[4px]">
                <span>30</span>
              </span>
            </div>
            <div className="flex gap-[16px] mb-[60px]">
              <Button className="bg-[#F3F2F1]">
                <CalendarIcon />
              </Button>
              <ActiveDayBtn date="Сегодня" count="10" />
              <DayBtn date="1 апреля" count="2" />
              <DayBtn date="5 апреля" count="1" />
            </div>
            <OrderItems />
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default OrdersManager;
