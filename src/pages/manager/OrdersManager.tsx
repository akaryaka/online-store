import Button from "@shared/ui/button/Button";
import Container from "@/widgets/container/Container";
import Crumbs from "@/widgets/crumbs/Crumbs";
import Title from "@/shared/ui/title/Title";
import type { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import cn from "classnames";
import Phone from "@shared/ui/phone/Phone";
import UserAccount from "@/shared/ui/userAccount/UserAccount";
import CalendarIcon from "@/widgets/icons/CalendarIcon";
import ClockIcon from "@/widgets/icons/ClockIcon";
import CheckIcon from "@/widgets/icons/CheckIcon";
import CheckCircle from "@/widgets/icons/CheckCircle";
import ChevronDownIcon from "@/widgets/icons/ChevronDownIcon";
import EyeIcon from "@/widgets/icons/EyeIcon";
import MessageSquareIcon from "@/widgets/icons/MessageSquareIcon";
import MessageSquareEmpty from "@/widgets/icons/MessageSquareEmpty";
import AlertTriangleIcon from "@/widgets/icons/AlertTriangleIcon";
import MessageSquareNotice from "@/widgets/icons/MessageSquareNotice";
import AlertCircleIcon from "@/widgets/icons/AlertCircleIcon";
import DeliveryIcon from "@/widgets/icons/DeliveryIcon";
import BaqIcon from "@/widgets/icons/BaqIcon";
import UploadIcon from "@/widgets/icons/UploadIcon";
import Card from "@/widgets/card/Card";
import { Helmet } from "react-helmet-async";
import Layout from "@app/layout/Layout";

interface DayBtnProps extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  date: string;
  count: string;
}

interface DayTimeProps {
  time: string;
}

interface NumberOrderProps {
  count: string;
}

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

const DayTime = ({ time }: DayTimeProps) => {
  return (
    <>
      <div className="flex items-center gap-[16px]">
        <ClockIcon />
        <div className="text-[38px] font-bold leading-[150%]">{time}</div>
      </div>
    </>
  );
};

interface OrderCheckListProps {
  current: string;
  full: string;
}

const OrderCheckList = ({ current, full }: OrderCheckListProps) => {
  return (
    <>
      <div className="flex gap-[10px]">
        <CheckIcon fill="#414141" />
        <span>{current}</span>
        <span>/</span>
        <span>{full}</span>
      </div>
    </>
  );
};

const NumberOrder = ({ count }: NumberOrderProps) => {
  return (
    <>
      <div className="text-[#232323] text-[24px] leading-[150%] font-bold">
        {count}
      </div>
    </>
  );
};

const OrdersManager = () => {
  return (
    <>
      <Helmet>
        <title>Менеджер | Заказы</title>
      </Helmet>
      <Layout>
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
            {/* Время 1 */}
            <div>
              <header className="flex justify-between items-center">
                <div className="mb-[16px]">
                  <DayTime time="11:00" />
                </div>
                <OrderCheckList current="5" full="5" />
              </header>
              <div className="flex gap-[10px] mb-[60px]">
                <ActiveDayBtn date="Усть-Ижма" count="3" />
                <DayBtn date="Галово" count="2" />
              </div>
              <div className="order mb-[60px] flex justify-between">
                <div className="flex">
                  <div className="mr-[16px]">
                    <NumberOrder count="355" />
                  </div>
                  <div className=" mr-[16px]">
                    <UserAccount name="Антон" />
                  </div>
                </div>
                <div className="flex items-center gap-[20px]">
                  <div>
                    <Phone number="+7 912 888 77 55" />
                  </div>
                  <div>
                    <Button className="flex gap-[4px] bg-[#008C49] text-[#fff]">
                      <CheckCircle />
                      <span>Подтвержден</span>
                      <ChevronDownIcon />
                    </Button>
                  </div>
                  <div>
                    <Button className="flex items-center gap-[8px] bg-[#F3F2F1] text-[#606060]">
                      <EyeIcon />
                      <span>Просмотреть заказ</span>
                    </Button>
                  </div>
                  <div>
                    <Button className="bg-[#F3F2F1]">
                      <MessageSquareIcon />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="order mb-[60px] flex justify-between">
                <div className="flex">
                  <div className="mr-[16px]">
                    <NumberOrder count="222" />
                  </div>
                  <div className=" mr-[16px]">
                    <UserAccount name="Дмитрий" />
                  </div>
                </div>
                <div className="flex items-center gap-[20px]">
                  <div>
                    <Phone number="+7 912 888 77 55" />
                  </div>
                  <div>
                    <Button className="flex gap-[4px] bg-[#008C49] text-[#fff]">
                      <CheckCircle />
                      <span>Подтвержден</span>
                      <ChevronDownIcon />
                    </Button>
                  </div>
                  <div>
                    <Button className="flex items-center gap-[8px] bg-[#F3F2F1] text-[#606060]">
                      <EyeIcon />
                      <span>Просмотреть заказ</span>
                    </Button>
                  </div>
                  <div>
                    <Button className="bg-[#F3F2F1]">
                      <MessageSquareEmpty />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="order mb-[60px] flex justify-between">
                <div className="flex">
                  <div className="mr-[16px]">
                    <NumberOrder count="134" />
                  </div>
                  <div className=" mr-[16px]">
                    <UserAccount name="Дмитрий" />
                  </div>
                </div>
                <div className="flex items-center gap-[20px]">
                  <div>
                    <Phone number="+7 912 888 77 55" />
                  </div>
                  <div>
                    <Button className="flex gap-[4px] bg-[#D80000] text-[#fff]">
                      <AlertTriangleIcon />
                      <span>Возврат</span>
                      <ChevronDownIcon />
                    </Button>
                  </div>
                  <div>
                    <Button className="flex items-center gap-[8px] bg-[#F3F2F1] text-[#606060]">
                      <EyeIcon />
                      <span>Просмотреть заказ</span>
                    </Button>
                  </div>
                  <div>
                    <Button className="bg-[#F3F2F1]">
                      <MessageSquareNotice />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* Время 2 */}
            <div>
              <header className="flex justify-between items-center">
                <div className="mb-[16px]">
                  <DayTime time="14:00" />
                </div>
                <OrderCheckList current="8" full="8" />
              </header>
              <div className="flex gap-[10px] mb-[60px]">
                <ActiveDayBtn date="Усть-Ижма" count="3" />
                <DayBtn date="Галово" count="2" />
              </div>
              <div className="order mb-[60px] flex justify-between">
                <div className="flex">
                  <div className="mr-[16px]">
                    <NumberOrder count="855" />
                  </div>
                  <div className=" mr-[16px]">
                    <UserAccount name="Антон" />
                  </div>
                </div>
                <div className="flex items-center gap-[20px]">
                  <div>
                    <Phone number="+7 912 888 77 55" />
                  </div>
                  <div>
                    <Button className="flex gap-[4px] bg-[#FCA21C] text-[#fff]">
                      <AlertCircleIcon />
                      <span>Не подтвердили</span>
                      <ChevronDownIcon fill="#f2f2f2" />
                    </Button>
                  </div>
                  <div>
                    <Button className="flex items-center gap-[8px] bg-[#F3F2F1] text-[#606060]">
                      <EyeIcon />
                      <span>Просмотреть</span>
                    </Button>
                  </div>
                  <div>
                    <Button className="bg-[#F3F2F1]">
                      <MessageSquareNotice />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="order mb-[60px] flex justify-between">
                <div className="flex">
                  <div className="mr-[16px]">
                    <NumberOrder count="543" />
                  </div>
                  <div className=" mr-[16px]">
                    <UserAccount name="Дмитрий" />
                  </div>
                </div>
                <div className="flex items-center gap-[20px]">
                  <div>
                    <Phone number="+7 912 888 77 55" />
                  </div>
                  <div>
                    <Button className="flex gap-[4px] bg-[#F3F2F1] text-[#606060]">
                      <DeliveryIcon />
                      <span>Доставляется</span>
                      <ChevronDownIcon fill="#606060" />
                    </Button>
                  </div>
                  <div>
                    <Button className="flex items-center gap-[8px] bg-[#F3F2F1] text-[#606060]">
                      <EyeIcon />
                      <span>Просмотреть</span>
                    </Button>
                  </div>
                  <div>
                    <Button className="bg-[#F3F2F1]">
                      <CalendarIcon />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="order mb-[60px] flex justify-between">
                <div className="flex">
                  <div className="mr-[16px]">
                    <NumberOrder count="756" />
                  </div>
                  <div className=" mr-[16px]">
                    <UserAccount name="Дмитрий" />
                  </div>
                </div>
                <div className="flex items-center gap-[20px]">
                  <div>
                    <Phone number="+7 912 888 77 55" />
                  </div>
                  <div>
                    <Button className="flex gap-[4px] bg-[#fff] text-[#414141]">
                      <BaqIcon />
                      <span>Новый</span>
                      <ChevronDownIcon fill="#414141" />
                    </Button>
                  </div>
                  <div>
                    <Button className="flex items-center gap-[8px] bg-[#F3F2F1] text-[#606060]">
                      <EyeIcon />
                      <span>Просмотреть</span>
                    </Button>
                  </div>
                  <div>
                    <Button className="bg-[#F3F2F1]">
                      <CalendarIcon />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* Время 3 */}
            <div className="mb-[120px]">
              <header className="flex justify-between items-center">
                <div className="mb-[16px]">
                  <DayTime time="18:00" />
                </div>
                <OrderCheckList current="1" full="2" />
              </header>
              <div className="flex gap-[10px] mb-[60px]">
                <ActiveDayBtn date="Усть-Ижма" count="3" />
              </div>
              <div className="order mb-[60px] flex justify-between">
                <div className="flex">
                  <div className="mr-[16px]">
                    <NumberOrder count="321" />
                  </div>
                  <div className=" mr-[16px]">
                    <UserAccount name="Антон" />
                  </div>
                </div>
                <div className="flex items-center gap-[20px]">
                  <div>
                    <Phone number="+7 912 888 77 55" />
                  </div>
                  <div>
                    <Button className="flex gap-[4px] bg-[#70C05B] text-[#fff]">
                      <CheckIcon fill="#fff" />
                      <span>Собран</span>
                      <ChevronDownIcon fill="#fff" />
                    </Button>
                  </div>
                  <div>
                    <Button className="flex items-center gap-[8px] bg-[#F3F2F1] text-[#606060]">
                      <EyeIcon />
                      <span>Просмотреть</span>
                    </Button>
                  </div>
                  <div>
                    <Button className="bg-[#F3F2F1]">
                      <CalendarIcon />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="order mb-[60px] ">
                <div className="flex justify-between mb-[40px]">
                  <div className="flex">
                    <div className="mr-[16px]">
                      <NumberOrder count="421" />
                    </div>
                    <div className=" mr-[16px]">
                      <UserAccount name="Дмитрий" />
                    </div>
                  </div>
                  <div className="flex items-center gap-[20px]">
                    <div>
                      <Phone number="+7 912 888 77 55" />
                    </div>
                    <div>
                      <Button className="flex gap-[4px] bg-[#F3F2F1] text-[#606060]">
                        <BaqIcon />
                        <span>Новый</span>
                        <ChevronDownIcon fill="#606060" />
                      </Button>
                    </div>
                    <div>
                      <Button className="flex items-center gap-[8px] bg-[#FF6633] text-[#fff]">
                        <UploadIcon />
                        <span>Выгрузить в 1с</span>
                      </Button>
                    </div>
                    <div>
                      <Button className="bg-[#F3F2F1]">
                        <CalendarIcon />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-[40px] mb-[40px]">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
                <div className="flex justify-center">
                  <Button className="flex gap-[8px] bg-[#F3F2F1]">
                    <EyeIcon />
                    <span>Просмотреть заказ</span>
                  </Button>
                </div>
              </div>
            </div>
            {/* Время 4 */}
            <div>
              <header className="flex justify-between items-center">
                <div className="mb-[16px]">
                  <DayTime time="20:00" />
                </div>
                <OrderCheckList current="0" full="15" />
              </header>
              <div className="flex gap-[10px] mb-[60px]">
                <ActiveDayBtn date="Усть-Ижма" count="3" />
                <DayBtn date="Галово" count="2" />
                <DayBtn date="Кельчиюр" count="2" />
                <DayBtn date="Галово" count="2" />
                <DayBtn date="Вертеп" count="2" />
                <DayBtn date="Краснобор" count="2" />
                <DayBtn date="Диюр" count="2" />
                <DayBtn date="Ыргеншар" count="2" />
                <DayBtn date="Щельяюр" count="2" />
              </div>
              <div className="order mb-[60px] ">
                <div className="flex justify-between mb-[40px]">
                  <div className="flex">
                    <div className="mr-[16px]">
                      <NumberOrder count="661" />
                    </div>
                    <div className=" mr-[16px]">
                      <UserAccount name="Дмитрий" />
                    </div>
                  </div>
                  <div className="flex items-center gap-[20px]">
                    <div>
                      <Phone number="+7 912 888 77 55" />
                    </div>
                    <div>
                      <Button className="flex gap-[4px] bg-[#F3F2F1] text-[#606060]">
                        <BaqIcon />
                        <span>Новый</span>
                        <ChevronDownIcon fill="#606060" />
                      </Button>
                    </div>
                    <div>
                      <Button className="flex items-center gap-[8px] bg-[#FF6633] text-[#fff]">
                        <UploadIcon />
                        <span>Выгрузить в 1с</span>
                      </Button>
                    </div>
                    <div>
                      <Button className="bg-[#F3F2F1]">
                        <CalendarIcon />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-[40px]">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
              <div className="order mb-[60px] ">
                <div className="flex justify-between mb-[40px]">
                  <div className="flex">
                    <div className="mr-[16px]">
                      <NumberOrder count="232" />
                    </div>
                    <div className=" mr-[16px]">
                      <UserAccount name="Дмитрий" />
                    </div>
                  </div>
                  <div className="flex items-center gap-[20px]">
                    <div>
                      <Phone number="+7 912 888 77 55" />
                    </div>
                    <div>
                      <Button className="flex gap-[4px] bg-[#F3F2F1] text-[#606060]">
                        <BaqIcon />
                        <span>Новый</span>
                        <ChevronDownIcon fill="#606060" />
                      </Button>
                    </div>
                    <div>
                      <Button className="flex items-center gap-[8px] bg-[#FF6633] text-[#fff]">
                        <UploadIcon />
                        <span>Выгрузить в 1с</span>
                      </Button>
                    </div>
                    <div>
                      <Button className="bg-[#F3F2F1]">
                        <CalendarIcon />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-[40px] mb-[40px]">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
                <div className="flex justify-center">
                  <Button className="flex gap-[8px] bg-[#F3F2F1]">
                    <EyeIcon />
                    <span>Просмотреть заказ</span>
                  </Button>
                </div>
              </div>
              <div className="order">
                <div className="flex justify-between mb-[40px]">
                  <div className="flex">
                    <div className="mr-[16px]">
                      <NumberOrder count="661" />
                    </div>
                    <div className=" mr-[16px]">
                      <UserAccount name="Дмитрий" />
                    </div>
                  </div>
                  <div className="flex items-center gap-[20px]">
                    <div>
                      <Phone number="+7 912 888 77 55" />
                    </div>
                    <div>
                      <Button className="flex gap-[4px] bg-[#F3F2F1] text-[#606060]">
                        <BaqIcon />
                        <span>Новый</span>
                        <ChevronDownIcon fill="#606060" />
                      </Button>
                    </div>
                    <div>
                      <Button className="flex items-center gap-[8px] bg-[#FF6633] text-[#fff]">
                        <UploadIcon />
                        <span>Выгрузить в 1с</span>
                      </Button>
                    </div>
                    <div>
                      <Button className="bg-[#F3F2F1]">
                        <CalendarIcon />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-[40px] mb-[40px]">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
                <div className="flex justify-center">
                  <Button className="flex gap-[8px] bg-[#F3F2F1]">
                    <EyeIcon />
                    <span>Просмотреть заказ</span>
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default OrdersManager;
