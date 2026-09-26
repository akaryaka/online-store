import Button from "@/components/button/Button";
import Container from "@/components/container/Container";
import Crumbs from "@/components/crumbs/Crumbs";
import Title from "@/components/title/Title";
import type { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import cn from "classnames";
import Phone from "@/components/phone/Phone";
import avatarImg from "@images/avatar.png";

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

interface UserAccountProps {
  name: string;
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

const NumberOrder = ({ count }: NumberOrderProps) => {
  return (
    <>
      <div className="text-[#232323] text-[24px] leading-[150%] font-bold">
        {count}
      </div>
    </>
  );
};

const UserAccount = ({ name }: UserAccountProps) => {
  return (
    <>
      <div className="flex items-center gap-[10px]">
        <img src={avatarImg} alt="avatar" />
        <div className="text-[16px] leading-[150%]">{name}</div>
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
              <div className="mb-[16px]">
                <DayTime time="11:00" />
              </div>
              <div>
                <ActiveDayBtn date="Усть-Ижма" count="3" />
                <DayBtn date="Галово" count="2" />
              </div>
              <OrderCheckList />
            </header>
            <div className="flex">
              <div className="mr-[16px]">
                <NumberOrder count="355" />
              </div>
              <div className=" mr-[16px]">
                <UserAccount name="Антон" />
              </div>
              <div className="mr-[20px]">
                <Phone number="+7 912 888 77 55" />
              </div>
              <div>
                <Button className="flex gap-[4px] bg-[#008C49] text-[#fff]">
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
                      d="M14.8666 4.31671C11.0235 2.60436 6.51196 3.62369 3.77842 6.82193C1.04488 10.0202 0.74055 14.6354 3.03047 18.1649C5.32038 21.6944 9.65905 23.2973 13.6936 22.1044C17.7282 20.9115 20.4977 17.207 20.5001 12.9997V12.07C20.5001 11.7939 20.7239 11.57 21.0001 11.57C21.2762 11.57 21.5001 11.7939 21.5001 12.07V13C21.4974 17.6501 18.4365 21.7449 13.9772 23.0634C9.51789 24.3819 4.72252 22.6102 2.19156 18.7092C-0.339398 14.8082 -0.00303388 9.7071 3.01825 6.17221C6.03953 2.63731 11.026 1.51068 15.2736 3.40328C15.5258 3.51567 15.6392 3.81126 15.5268 4.0635C15.4144 4.31573 15.1188 4.4291 14.8666 4.31671Z"
                      fill="#F2F2F2"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.3536 3.64645C22.5488 3.84171 22.5488 4.15829 22.3536 4.35355L11.3536 15.3536C11.1583 15.5488 10.8417 15.5488 10.6464 15.3536L7.64645 12.3536C7.45118 12.1583 7.45118 11.8417 7.64645 11.6464C7.84171 11.4512 8.15829 11.4512 8.35355 11.6464L11 14.2929L21.6464 3.64645C21.8417 3.45118 22.1583 3.45118 22.3536 3.64645Z"
                      fill="#F2F2F2"
                    />
                  </svg>
                  <span>Подтвержден</span>
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
                      d="M5.64645 8.64645C5.84171 8.45118 6.15829 8.45118 6.35355 8.64645L12 14.2929L17.6464 8.64645C17.8417 8.45118 18.1583 8.45118 18.3536 8.64645C18.5488 8.84171 18.5488 9.15829 18.3536 9.35355L12.3536 15.3536C12.1583 15.5488 11.8417 15.5488 11.6464 15.3536L5.64645 9.35355C5.45118 9.15829 5.45118 8.84171 5.64645 8.64645Z"
                      fill="#F2F2F2"
                    />
                  </svg>
                </Button>
              </div>
              <div>
                <Button className="flex items-center gap-[8px] bg-[#F3F2F1] text-[#606060]">
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
                      d="M1.56643 12C1.58302 12.0301 1.60133 12.063 1.62133 12.0986C1.73999 12.3096 1.91836 12.6133 2.15439 12.9787C2.62709 13.7107 3.32783 14.6853 4.23977 15.658C6.07276 17.6132 8.69975 19.5 12 19.5C15.3002 19.5 17.9272 17.6132 19.7602 15.658C20.6722 14.6853 21.3729 13.7107 21.8456 12.9787C22.0816 12.6133 22.26 12.3096 22.3787 12.0986C22.3987 12.0631 22.417 12.0301 22.4336 12C22.417 11.9699 22.3987 11.937 22.3787 11.9014C22.26 11.6904 22.0816 11.3867 21.8456 11.0213C21.3729 10.2893 20.6722 9.3147 19.7602 8.34197C17.9272 6.38678 15.3002 4.5 12 4.5C8.69975 4.5 6.07276 6.38678 4.23977 8.34197C3.32783 9.3147 2.62709 10.2893 2.15439 11.0213C1.91836 11.3867 1.73999 11.6904 1.62133 11.9014C1.60133 11.937 1.58302 11.9699 1.56643 12ZM23 12C23.4472 11.7764 23.4471 11.7762 23.447 11.776L23.4459 11.7737L23.443 11.7681L23.433 11.7484C23.4243 11.7316 23.4118 11.7074 23.3953 11.6763C23.3624 11.6141 23.314 11.5244 23.2502 11.4111C23.1228 11.1846 22.934 10.8633 22.6856 10.4787C22.1896 9.71066 21.4528 8.6853 20.4898 7.65803C18.5728 5.61322 15.6998 3.5 12 3.5C8.30025 3.5 5.42724 5.61322 3.51023 7.65803C2.54717 8.6853 1.81041 9.71066 1.31436 10.4787C1.06602 10.8633 0.877193 11.1846 0.749759 11.4111C0.686023 11.5244 0.637588 11.6141 0.604692 11.6763C0.588242 11.7074 0.575673 11.7316 0.567013 11.7484L0.556958 11.7681L0.554135 11.7737L0.553277 11.7754C0.553169 11.7756 0.552786 11.7764 1 12L0.552786 11.7764C0.482405 11.9172 0.482405 12.0828 0.552786 12.2236L1 12C0.552786 12.2236 0.552679 12.2234 0.552786 12.2236L0.553277 12.2246L0.554135 12.2263L0.556958 12.2319L0.567013 12.2516C0.575673 12.2684 0.588242 12.2926 0.604692 12.3237C0.637588 12.3859 0.686023 12.4756 0.749759 12.5889C0.877193 12.8154 1.06602 13.1367 1.31436 13.5213C1.81041 14.2893 2.54717 15.3147 3.51023 16.342C5.42724 18.3868 8.30025 20.5 12 20.5C15.6998 20.5 18.5728 18.3868 20.4898 16.342C21.4528 15.3147 22.1896 14.2893 22.6856 13.5213C22.934 13.1367 23.1228 12.8154 23.2502 12.5889C23.314 12.4756 23.3624 12.3859 23.3953 12.3237C23.4118 12.2926 23.4243 12.2684 23.433 12.2516L23.443 12.2319L23.4459 12.2263L23.4467 12.2246C23.4468 12.2244 23.4472 12.2236 23 12ZM23 12L23.4472 12.2236C23.5176 12.0828 23.5174 11.9168 23.447 11.776L23 12Z"
                      fill="#606060"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12ZM12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5Z"
                      fill="#606060"
                    />
                  </svg>
                  <span>Просмотреть заказ</span>
                </Button>
              </div>
              <div>
                <Button className="bg-[#F3F2F1]">
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
                      d="M5 3.5C4.17157 3.5 3.5 4.17157 3.5 5V19.7929L6.64645 16.6464C6.74021 16.5527 6.86739 16.5 7 16.5H19C19.8284 16.5 20.5 15.8284 20.5 15V5C20.5 4.17157 19.8284 3.5 19 3.5H5ZM2.5 5C2.5 3.61929 3.61929 2.5 5 2.5H19C20.3807 2.5 21.5 3.61929 21.5 5V15C21.5 16.3807 20.3807 17.5 19 17.5H7.20711L3.35355 21.3536C3.21055 21.4966 2.9955 21.5393 2.80866 21.4619C2.62182 21.3846 2.5 21.2022 2.5 21V5Z"
                      fill="#606060"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.5 7C5.5 6.72386 5.72386 6.5 6 6.5H18C18.2761 6.5 18.5 6.72386 18.5 7C18.5 7.27614 18.2761 7.5 18 7.5H6C5.72386 7.5 5.5 7.27614 5.5 7Z"
                      fill="#606060"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.5 10C5.5 9.72386 5.72386 9.5 6 9.5H18C18.2761 9.5 18.5 9.72386 18.5 10C18.5 10.2761 18.2761 10.5 18 10.5H6C5.72386 10.5 5.5 10.2761 5.5 10Z"
                      fill="#606060"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.5 13C5.5 12.7239 5.72386 12.5 6 12.5H18C18.2761 12.5 18.5 12.7239 18.5 13C18.5 13.2761 18.2761 13.5 18 13.5H6C5.72386 13.5 5.5 13.2761 5.5 13Z"
                      fill="#606060"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default OrdersManager;
