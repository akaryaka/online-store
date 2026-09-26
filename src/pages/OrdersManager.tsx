import Button from "@/components/button/Button";
import Container from "@/components/container/Container";
import Crumbs from "@/components/crumbs/Crumbs";
import Title from "@/components/title/Title";
import type { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import cn from "classnames";

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
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5Z"
            fill="#414141"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 5.5C12.2761 5.5 12.5 5.72386 12.5 6V11.7929L15.3536 14.6464C15.5488 14.8417 15.5488 15.1583 15.3536 15.3536C15.1583 15.5488 14.8417 15.5488 14.6464 15.3536L11.6464 12.3536C11.5527 12.2598 11.5 12.1326 11.5 12V6C11.5 5.72386 11.7239 5.5 12 5.5Z"
            fill="#414141"
          />
        </svg>
        <div className="text-[38px] font-bold leading-[150%]">{time}</div>
      </div>
    </>
  );
};

const OrderCheckList = () => {
  return (
    <>
      <div className="flex gap-[10px]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.3536 6.64645C20.5488 6.84171 20.5488 7.15829 20.3536 7.35355L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536L3.64645 13.3536C3.45118 13.1583 3.45118 12.8417 3.64645 12.6464C3.84171 12.4512 4.15829 12.4512 4.35355 12.6464L9 17.2929L19.6464 6.64645C19.8417 6.45118 20.1583 6.45118 20.3536 6.64645Z"
            fill="#414141"
          />
        </svg>
        <span>5</span>
        <span>/</span>
        <span>5</span>
      </div>
    </>
  );
};

const OrdersManager = () => {
  return (
    <>
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
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.33301 8.00001C3.33301 6.15906 4.82539 4.66667 6.66634 4.66667H25.333C27.174 4.66667 28.6663 6.15906 28.6663 8.00001V26.6667C28.6663 28.5076 27.174 30 25.333 30H6.66634C4.82539 30 3.33301 28.5076 3.33301 26.6667V8.00001ZM6.66634 6.00001C5.56177 6.00001 4.66634 6.89544 4.66634 8.00001V26.6667C4.66634 27.7712 5.56177 28.6667 6.66634 28.6667H25.333C26.4376 28.6667 27.333 27.7712 27.333 26.6667V8.00001C27.333 6.89544 26.4376 6.00001 25.333 6.00001H6.66634Z"
                  fill="#606060"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.3337 2C21.7018 2 22.0003 2.29848 22.0003 2.66667V8C22.0003 8.36819 21.7018 8.66667 21.3337 8.66667C20.9655 8.66667 20.667 8.36819 20.667 8V2.66667C20.667 2.29848 20.9655 2 21.3337 2Z"
                  fill="#606060"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.6667 2C11.0349 2 11.3333 2.29848 11.3333 2.66667V8C11.3333 8.36819 11.0349 8.66667 10.6667 8.66667C10.2985 8.66667 10 8.36819 10 8V2.66667C10 2.29848 10.2985 2 10.6667 2Z"
                  fill="#606060"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.33301 13.3333C3.33301 12.9651 3.63148 12.6667 3.99967 12.6667H27.9997C28.3679 12.6667 28.6663 12.9651 28.6663 13.3333C28.6663 13.7015 28.3679 14 27.9997 14H3.99967C3.63148 14 3.33301 13.7015 3.33301 13.3333Z"
                  fill="#606060"
                />
              </svg>
            </Button>
            <ActiveDayBtn date="Сегодня" count="10" />
            <DayBtn date="1 апреля" count="2" />
            <DayBtn date="5 апреля" count="1" />
          </div>
          <div>
            <header className="flex justify-between items-center">
              <DayTime time="11:00" />
              <OrderCheckList />
            </header>
          </div>
        </Container>
      </div>
    </>
  );
};

export default OrdersManager;
