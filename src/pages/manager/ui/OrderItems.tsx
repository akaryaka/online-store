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
import Phone from "@shared/ui/phone";
import UserAccount from "@/shared/ui/userAccount";
import Button from "@/shared/ui/button";
import CalendarIcon from "@/widgets/icons/CalendarIcon";
import OrderCounterBtn from "./OrderCounterBtn";

interface DayTimeProps {
  time: string;
}

interface NumberOrderProps {
  count: string;
}

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

const OrderItems = () => {
  return (
    <>
      <div>
        {/* Время 1 */}
        <div>
          <header className="flex justify-between items-center">
            <div className="mb-[16px]">
              <DayTime time="11:00" />
            </div>
            <OrderCheckList current="5" full="5" />
          </header>
          <div className="flex gap-[10px] mb-[60px]">
            <OrderCounterBtn
              type=""
              size="m"
              dateSize="s"
              countSize="xs"
              date="Усть-Ижма"
              accent="secondary"
              count="3"
              className="p-[8px] gap-[8px]"
            />
            <OrderCounterBtn
              type=""
              size="m"
              dateSize="s"
              countSize="xs"
              date="Галово"
              accent="greyscale"
              count="2"
              className="p-[8px] gap-[8px]"
            />
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
                <Button
                  size="m"
                  type="text-btn"
                  icon
                  leftIcon={<CheckCircle />}
                  rightIcon={<ChevronDownIcon fill="#fff" />}
                  className="flex items-center w-[200px] p-[8px] bg-[#008C49] text-[#fff]"
                >
                  <span className="ml-[4px] mr-[auto]">Подтвержден</span>
                </Button>
              </div>
              <div>
                <Button
                  size="m"
                  accent="greyscale"
                  type="text-btn"
                  leftIcon={<EyeIcon />}
                  className="flex items-center p-[8px] gap-[8px]"
                >
                  <span>Просмотреть заказ</span>
                </Button>
              </div>
              <div>
                <Button
                  size="m"
                  type="icon-btn"
                  accent="greyscale"
                  icon={<MessageSquareIcon />}
                  className="w-[40px] items-center justify-center"
                />
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
                <Button
                  size="m"
                  type="text-btn"
                  icon
                  leftIcon={<CheckCircle />}
                  rightIcon={<ChevronDownIcon fill="#fff" />}
                  className="flex items-center w-[200px] p-[8px] bg-[#008C49] text-[#fff]"
                >
                  <span className="ml-[4px] mr-[auto]">Подтвержден</span>
                </Button>
              </div>
              <div>
                <Button
                  size="m"
                  accent="greyscale"
                  type="text-btn"
                  leftIcon={<EyeIcon />}
                  className="flex items-center p-[8px] gap-[8px]"
                >
                  <span>Просмотреть заказ</span>
                </Button>
              </div>
              <div>
                <Button
                  size="m"
                  type="icon-btn"
                  accent="greyscale"
                  className="w-[40px] justify-center items-center"
                  icon={<MessageSquareEmpty />}
                />
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
                <Button
                  size="m"
                  type="text-btn"
                  leftIcon={<AlertTriangleIcon />}
                  rightIcon={<ChevronDownIcon fill="#fff" />}
                  className="flex items-center w-[200px] p-[8px] gap-[4px] bg-[#D80000] text-[#fff]"
                >
                  <span className="ml-[4px] mr-[auto]">Возврат</span>
                </Button>
              </div>
              <div>
                <Button
                  size="m"
                  accent="greyscale"
                  type="text-btn"
                  leftIcon={<EyeIcon />}
                  className="flex items-center p-[8px] gap-[8px]"
                >
                  <span>Просмотреть заказ</span>
                </Button>
              </div>
              <div>
                <Button
                  size="m"
                  type="icon-btn"
                  accent="greyscale"
                  className="w-[40px] justify-center items-center"
                  icon={<MessageSquareNotice />}
                />
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
            <div className="flex gap-[10px] mb-[60px]">
              <OrderCounterBtn
                type=""
                size="m"
                dateSize="s"
                countSize="xs"
                date="Усть-Ижма"
                accent="secondary"
                count="3"
                className="p-[8px] gap-[8px]"
              />
              <OrderCounterBtn
                type=""
                size="m"
                dateSize="s"
                countSize="xs"
                date="Галово"
                accent="greyscale"
                count="2"
                className="p-[8px] gap-[8px]"
              />
            </div>
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
                <Button
                  size="m"
                  leftIcon={<AlertCircleIcon />}
                  rightIcon={<ChevronDownIcon fill="#f2f2f2" />}
                  type="text-btn"
                  className="flex p-[8px] w-[200px] bg-[#FCA21C] text-[#fff]"
                >
                  <span className="ml-[4px] mr-[auto]">Не подтвердили</span>
                </Button>
              </div>
              <div>
                <Button
                  className="w-[200px] flex items-center p-[8px] gap-[8px]"
                  size="m"
                  leftIcon={<EyeIcon />}
                  accent="greyscale"
                  type="text-btn"
                >
                  <span className="ml-[20px]">Просмотреть</span>
                </Button>
              </div>
              <div>
                <Button
                  type="icon-btn"
                  size="m"
                  accent="greyscale"
                  icon={<MessageSquareNotice />}
                  className="w-[40px] justify-center items-center bg-[#F3F2F1]"
                />
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
                <Button
                  type="text-btn"
                  leftIcon={<DeliveryIcon />}
                  rightIcon={<ChevronDownIcon fill="#606060" />}
                  accent="greyscale"
                  size="m"
                  className="flex w-[200px]  p-[8px] gap-[4px]"
                >
                  <span className="mr-[auto] ml-[4px]">Доставляется</span>
                </Button>
              </div>
              <div>
                <Button
                  className="w-[200px] flex items-center p-[8px] gap-[8px]"
                  size="m"
                  leftIcon={<EyeIcon />}
                  accent="greyscale"
                  type="text-btn"
                >
                  <span className="ml-[20px]">Просмотреть</span>
                </Button>
              </div>
              <div>
                <Button
                  size="m"
                  icon={<CalendarIcon />}
                  type="icon-btn"
                  accent="greyscale"
                  className="w-[40px] items-center justify-center"
                />
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
                <Button
                  type="text-btn"
                  size="m"
                  leftIcon={<BaqIcon />}
                  rightIcon={<ChevronDownIcon fill="#414141" />}
                  className="flex gap-[4px] bg-[#fff] w-[200px] p-[8px] text-[#414141]"
                >
                  <span className="mr-[auto] ml-[4px]">Новый</span>
                </Button>
              </div>
              <div>
                <Button
                  className="w-[200px] flex items-center p-[8px] gap-[8px]"
                  size="m"
                  leftIcon={<EyeIcon />}
                  accent="greyscale"
                  type="text-btn"
                >
                  <span className="ml-[20px]">Просмотреть</span>
                </Button>
              </div>
              <div>
                <Button
                  size="m"
                  icon={<CalendarIcon />}
                  type="icon-btn"
                  accent="greyscale"
                  className="w-[40px] items-center justify-center"
                />
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
            <OrderCounterBtn
              size="m"
              type="text-btn"
              dateSize="s"
              countSize="xs"
              date="Усть-Ижма"
              accent="secondary"
              count="3"
              className="p-[8px] gap-[8px]"
            />
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
                <Button
                  type="text-btn"
                  size="m"
                  leftIcon={<CheckIcon fill="#fff" />}
                  rightIcon={<ChevronDownIcon fill="#fff" />}
                  className="flex gap-[4px] w-[200px] p-[8px] bg-[#70C05B] text-[#fff]"
                >
                  <span className="mr-[auto] ml-[4px]">Собран</span>
                </Button>
              </div>
              <div>
                <Button
                  className="w-[200px] flex items-center p-[8px] gap-[8px]"
                  size="m"
                  leftIcon={<EyeIcon />}
                  accent="greyscale"
                  type="text-btn"
                >
                  <span className="ml-[20px]">Просмотреть</span>
                </Button>
              </div>
              <div>
                <Button
                  size="m"
                  icon={<CalendarIcon />}
                  type="icon-btn"
                  accent="greyscale"
                  className="w-[40px] items-center justify-center"
                />
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
                  <Button
                    type="text-btn"
                    size="m"
                    leftIcon={<BaqIcon />}
                    rightIcon={<ChevronDownIcon fill="#606060" />}
                    className="flex w-[200px] p-[8px] gap-[4px] bg-[#F3F2F1] text-[#606060]"
                  >
                    <span className="mr-[auto] ml-[4px]">Новый</span>
                  </Button>
                </div>
                <div>
                  <Button
                    type="text-btn"
                    size="m"
                    leftIcon={<UploadIcon />}
                    className="flex w-[200px] p-[8px] items-center gap-[20px] bg-[#FF6633] text-[#fff]"
                  >
                    <span>Выгрузить в 1с</span>
                  </Button>
                </div>
                <div>
                  <Button
                    size="m"
                    icon={<CalendarIcon />}
                    type="icon-btn"
                    accent="greyscale"
                    className="w-[40px] items-center justify-center"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-[40px] mb-[40px]">
              <Card
                type="product"
                price={""}
                title={""}
                img={""}
                rating={0}
                favorites={false}
              />
              <Card
                type="product"
                price={""}
                title={""}
                img={""}
                rating={0}
                favorites={false}
              />
              <Card
                type="product"
                price={""}
                title={""}
                img={""}
                rating={0}
                favorites={false}
              />
              <Card
                type="product"
                price={""}
                title={""}
                img={""}
                rating={0}
                favorites={false}
              />
            </div>
            <div className="flex justify-center">
              <Button
                size="m"
                accent="greyscale"
                type="text-btn"
                leftIcon={<EyeIcon />}
                className="flex items-center p-[8px] gap-[8px]"
              >
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
          <div className="flex gap-[4px] mb-[60px]">
            <OrderCounterBtn
              type="text-btn"
              size="m"
              dateSize="s"
              countSize="xs"
              date="Усть-Ижма"
              accent="secondary"
              count="3"
              className="gap-[8px] p-[8px]"
            />
            <OrderCounterBtn
              type="text-btn"
              size="m"
              dateSize="s"
              countSize="xs"
              date="Галово"
              accent="greyscale"
              count="1"
              className="p-[8px] gap-[8px]"
            />
            <OrderCounterBtn
              type="text-btn"
              size="m"
              dateSize="s"
              countSize="xs"
              date="Кельчиюр"
              accent="greyscale"
              count="1"
              className="p-[8px] gap-[8px]"
            />
            <OrderCounterBtn
              type="text-btn"
              size="m"
              dateSize="s"
              countSize="xs"
              date="Галово"
              accent="greyscale"
              count="1"
              className="p-[8px] gap-[8px]"
            />
            <OrderCounterBtn
              type="text-btn"
              size="m"
              dateSize="s"
              countSize="xs"
              date="Вертеп"
              accent="greyscale"
              count="1"
              className="p-[8px] gap-[8px]"
            />
            <OrderCounterBtn
              type="text-btn"
              size="m"
              dateSize="s"
              countSize="xs"
              date="Краснобор"
              accent="greyscale"
              count="1"
              className="p-[8px] gap-[8px]"
            />
            <OrderCounterBtn
              type="text-btn"
              size="m"
              dateSize="s"
              countSize="xs"
              date="Диюр"
              accent="greyscale"
              count="1"
              className="p-[8px] gap-[8px]"
            />
            <OrderCounterBtn
              type="text-btn"
              size="m"
              dateSize="s"
              countSize="xs"
              date="Ыргеншар"
              accent="greyscale"
              count="1"
              className="p-[8px] gap-[8px]"
            />
            <OrderCounterBtn
              type="text-btn"
              size="m"
              dateSize="s"
              countSize="xs"
              date="Щельяюр"
              accent="greyscale"
              count="1"
              className="p-[8px] gap-[8px]"
            />
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
                  <Button
                    type="text-btn"
                    size="m"
                    leftIcon={<BaqIcon />}
                    rightIcon={<ChevronDownIcon fill="#606060" />}
                    className="flex w-[200px] p-[8px] gap-[4px] bg-[#F3F2F1] text-[#606060]"
                  >
                    <span className="mr-[auto] ml-[4px]">Новый</span>
                  </Button>
                </div>
                <div>
                  <Button
                    type="text-btn"
                    size="m"
                    leftIcon={<UploadIcon />}
                    className="flex w-[200px] p-[8px] items-center gap-[20px] bg-[#FF6633] text-[#fff]"
                  >
                    <span>Выгрузить в 1с</span>
                  </Button>
                </div>
                <div>
                  <Button
                    size="m"
                    icon={<CalendarIcon />}
                    type="icon-btn"
                    accent="greyscale"
                    className="w-[40px] items-center justify-center"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-[40px]">
              <Card
                type="product"
                price={""}
                title={""}
                img={""}
                rating={0}
                favorites={false}
              />
              <Card
                type="product"
                price={""}
                title={""}
                img={""}
                rating={0}
                favorites={false}
              />
              <Card
                type="product"
                price={""}
                title={""}
                img={""}
                rating={0}
                favorites={false}
              />
              <Card
                type="product"
                price={""}
                title={""}
                img={""}
                rating={0}
                favorites={false}
              />
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
                  <Button
                    type="text-btn"
                    size="m"
                    leftIcon={<BaqIcon />}
                    rightIcon={<ChevronDownIcon fill="#606060" />}
                    className="flex w-[200px] p-[8px] gap-[4px] bg-[#F3F2F1] text-[#606060]"
                  >
                    <span className="mr-[auto] ml-[4px]">Новый</span>
                  </Button>
                </div>
                <div>
                  <Button
                    type="text-btn"
                    size="m"
                    leftIcon={<UploadIcon />}
                    className="flex w-[200px] p-[8px] items-center gap-[20px] bg-[#FF6633] text-[#fff]"
                  >
                    <span>Выгрузить в 1с</span>
                  </Button>
                </div>
                <div>
                  <Button
                    size="m"
                    icon={<CalendarIcon />}
                    type="icon-btn"
                    accent="greyscale"
                    className="w-[40px] items-center justify-center"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-[40px] mb-[40px]">
              <Card
                type="product"
                price={""}
                title={""}
                img={""}
                rating={0}
                favorites={false}
              />
              <Card
                type="product"
                price={""}
                title={""}
                img={""}
                rating={0}
                favorites={false}
              />
              <Card
                type="product"
                price={""}
                title={""}
                img={""}
                rating={0}
                favorites={false}
              />
              <Card
                type="product"
                price={""}
                title={""}
                img={""}
                rating={0}
                favorites={false}
              />
            </div>
            <div className="flex justify-center">
              <Button
                size="m"
                accent="greyscale"
                type="text-btn"
                leftIcon={<EyeIcon />}
                className="flex items-center p-[8px] gap-[8px]"
              >
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
                  <Button
                    type="text-btn"
                    size="m"
                    leftIcon={<BaqIcon />}
                    rightIcon={<ChevronDownIcon fill="#606060" />}
                    className="flex w-[200px] p-[8px] gap-[4px] bg-[#F3F2F1] text-[#606060]"
                  >
                    <span className="mr-[auto] ml-[4px]">Новый</span>
                  </Button>
                </div>
                <div>
                  <Button
                    type="text-btn"
                    size="m"
                    leftIcon={<UploadIcon />}
                    className="flex w-[200px] p-[8px] items-center gap-[20px] bg-[#FF6633] text-[#fff]"
                  >
                    <span>Выгрузить в 1с</span>
                  </Button>
                </div>
                <div>
                  <Button
                    size="m"
                    icon={<CalendarIcon />}
                    type="icon-btn"
                    accent="greyscale"
                    className="w-[40px] items-center justify-center"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-[40px] mb-[40px]">
              <Card
                type="product"
                price={""}
                title={""}
                img={""}
                rating={0}
                favorites={false}
              />
              <Card
                type="product"
                price={""}
                title={""}
                img={""}
                rating={0}
                favorites={false}
              />
              <Card
                type="product"
                price={""}
                title={""}
                img={""}
                rating={0}
                favorites={false}
              />
              <Card
                type="product"
                price={""}
                title={""}
                img={""}
                rating={0}
                favorites={false}
              />
            </div>
            <div className="flex justify-center">
              <Button
                size="m"
                accent="greyscale"
                type="text-btn"
                leftIcon={<EyeIcon />}
                className="flex items-center p-[8px] gap-[8px]"
              >
                <span>Просмотреть заказ</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderItems;
