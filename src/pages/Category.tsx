import { Link } from "react-router";
import ArrowIcon from "@/components/icons/ArrowIcon";
import Container from "@/components/container/Container";
import Title from "@/components/title/Title";
import Card from "@/components/card/Card";
import product1 from "@images/product1.png";
import Button from "@/components/button/Button";
import { Switch, Slider } from "@mui/material";
import { useState } from "react";
import cn from "classnames";
import type { DetailedHTMLProps, LinkHTMLAttributes } from "react";

interface ResetIconProps {
  fill: string;
}

const ResetIcon = ({ fill }: ResetIconProps) => {
  return (
    <>
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
          d="M18.3536 5.64645C18.5488 5.84171 18.5488 6.15829 18.3536 6.35355L6.35355 18.3536C6.15829 18.5488 5.84171 18.5488 5.64645 18.3536C5.45118 18.1583 5.45118 17.8417 5.64645 17.6464L17.6464 5.64645C17.8417 5.45118 18.1583 5.45118 18.3536 5.64645Z"
          fill={fill}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.64645 5.64645C5.84171 5.45118 6.15829 5.45118 6.35355 5.64645L18.3536 17.6464C18.5488 17.8417 18.5488 18.1583 18.3536 18.3536C18.1583 18.5488 17.8417 18.5488 17.6464 18.3536L5.64645 6.35355C5.45118 6.15829 5.45118 5.84171 5.64645 5.64645Z"
          fill={fill}
        />
      </svg>
    </>
  );
};

interface PaginationLinkProps extends DetailedHTMLProps<
  LinkHTMLAttributes<HTMLLinkElement>,
  HTMLLinkElement
> {
  title: number;
  active?: boolean;
}

const PaginationLink = ({
  title,
  className,
  ...props
}: PaginationLinkProps) => {
  return (
    <>
      <a
        className={cn(
          "text-[16px] leading-[150%] text-[#606060] p-[8px]",
          className,
          { ...props },
        )}
        href="#"
      >
        {title}
      </a>
    </>
  );
};

const Category = () => {
  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number[]) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="pt-[24px] pb-[80px]">
        <div className="mb-[27px]">
          {/* заменить компонентом */}
          <Container>
            <div className="flex items-center gap-[10px]">
              <Link
                className="leading-[150%] text-[12px] text-[#414141]"
                to="/"
              >
                Главная
              </Link>
              <ArrowIcon />
              <Link
                className="leading-[150%] text-[12px] text-[#414141]"
                to="/catalog"
              >
                Каталог
              </Link>
              <ArrowIcon />
              <Link
                className="leading-[150%] text-[12px] text-[#8F8F8F]"
                to="/"
              >
                Молоко, сыр, яйцо
              </Link>
            </div>
          </Container>
        </div>
        <div>
          <Container>
            <Title className="mb-[60px]">Молоко, сыр, яйцо</Title>
            <div className="flex gap-[24px] mb-[40px]">
              <Button textColor="#606060" bgColor="greyscale">
                Товары нашего производства
              </Button>
              <Button textColor="#606060" bgColor="greyscale">
                Полезное питание
              </Button>
              <Button textColor="#606060" bgColor="greyscale">
                Без ГМО
              </Button>
            </div>
            <div className="flex gap-[40px] justify-between">
              <div className="sidebar w-[272px]">
                <Button
                  textColor="#606060"
                  bgColor="greyscale"
                  className="text-left w-[100%] mb-[40px]"
                >
                  <span className="font-bold text-[16px] leading-[150%] text-[#414141]">
                    Фильтр
                  </span>
                </Button>
                <div className="flex justify-between items-center mb-[13px]">
                  <div className="text-[16px] leading-[150%]">Цена</div>
                  <Button textColor="#606060" bgColor="greyscale">
                    Очистить
                  </Button>
                </div>
                <div className="flex items-center mb-[40px]">
                  <input
                    className="w-[124px] border border-[#BFBFBF] rounded-[4px] bg-[#fff] p-[8px_16px]"
                    type="text"
                    value={1}
                  />
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
                      d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z"
                      fill="#414141"
                    />
                  </svg>
                  <input
                    className="w-[124px] border border-[#BFBFBF] rounded-[4px] bg-[#fff] p-[8px_16px]"
                    type="text"
                    value={100}
                  />
                </div>
                <Slider
                  className="mb-[40px]"
                  value={value}
                  onChange={handleChange}
                  getAriaLabel={() => "Temperature range"}
                />
                <ul className="mb-[40px]">
                  <li className="mb-[10px] p-[10px] text-[#414141] text-[16px] leading-[150%]">
                    Молоко
                  </li>
                  <li className="mb-[10px] p-[10px] text-[#414141] text-[16px] leading-[150%]">
                    Сливки
                  </li>
                  <li className="mb-[10px] p-[10px] text-[#414141] text-[16px] leading-[150%]">
                    Яйцо
                  </li>
                </ul>
                <div className="flex items-center gap-[10px] mb-[40px]">
                  <Switch />
                  <span className="text-[16px] leading-[150%] text-[#414141]">
                    В наличии
                  </span>
                </div>
                <button className="w-[100%] font-[Rubik] bg-primary rounded-[4px] text-[#fff] text-[16px] leading-[150%] cursor-pointer p-[8px]">
                  Применить
                </button>
              </div>
              <div className="content grow">
                <div className="flex  gap-[24px] mb-[40px]">
                  <Button
                    className=" flex items-center gap-[8px]"
                    bgColor="secondary"
                    textColor="#fff"
                  >
                    <span>Фильтр 4</span>
                    <ResetIcon fill="#fff" />
                  </Button>
                  <Button
                    className="flex items-center gap-[8px]"
                    bgColor="secondary"
                    textColor="#fff"
                  >
                    <span>Цена от 99 до 2599</span>
                    <ResetIcon fill="#fff" />
                  </Button>
                  <Button
                    className="flex items-center gap-[8px]"
                    bgColor="greyscale"
                    textColor="#606060"
                  >
                    <span>Очистить фильтры</span>
                    <ResetIcon fill="#414141" />
                  </Button>
                </div>
                <div className="cards grid grid-cols-3 grid-rows-2 gap-[40px] mb-[40px]">
                  <Card img={product1} rating={2} />
                  <Card img={product1} rating={2} />
                  <Card img={product1} rating={2} />
                  <Card img={product1} rating={2} />
                  <Card img={product1} rating={2} />
                  <Card img={product1} rating={2} />
                </div>
                <div className="flex justify-center mb-[40px]">
                  <Button textColor="#606060" bgColor="greyscale">
                    Показать ещё
                  </Button>
                  {/* <ButtonGreyscale>Показать ещё</ButtonGreyscale> */}
                </div>
                <div className="flex justify-center">
                  <button className="cursor-pointer p-[8px]">
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
                        d="M11.3536 6.64645C11.5488 6.84171 11.5488 7.15829 11.3536 7.35355L6.70711 12L11.3536 16.6464C11.5488 16.8417 11.5488 17.1583 11.3536 17.3536C11.1583 17.5488 10.8417 17.5488 10.6464 17.3536L5.64645 12.3536C5.45118 12.1583 5.45118 11.8417 5.64645 11.6464L10.6464 6.64645C10.8417 6.45118 11.1583 6.45118 11.3536 6.64645Z"
                        fill="#414141"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.3536 6.64645C18.5488 6.84171 18.5488 7.15829 18.3536 7.35355L13.7071 12L18.3536 16.6464C18.5488 16.8417 18.5488 17.1583 18.3536 17.3536C18.1583 17.5488 17.8417 17.5488 17.6464 17.3536L12.6464 12.3536C12.4512 12.1583 12.4512 11.8417 12.6464 11.6464L17.6464 6.64645C17.8417 6.45118 18.1583 6.45118 18.3536 6.64645Z"
                        fill="#414141"
                      />
                    </svg>
                  </button>
                  <button className="cursor-pointer p-[8px] ">
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
                        d="M15.3536 5.64645C15.5488 5.84171 15.5488 6.15829 15.3536 6.35355L9.70711 12L15.3536 17.6464C15.5488 17.8417 15.5488 18.1583 15.3536 18.3536C15.1583 18.5488 14.8417 18.5488 14.6464 18.3536L8.64645 12.3536C8.45118 12.1583 8.45118 11.8417 8.64645 11.6464L14.6464 5.64645C14.8417 5.45118 15.1583 5.45118 15.3536 5.64645Z"
                        fill="#414141"
                      />
                    </svg>
                  </button>
                  <ul className="flex items-center justify-center gap-[16px]">
                    <li className="flex justify-center items-center w-[40px] h-[40px]">
                      <PaginationLink className=" text-primary" title={1} />
                    </li>
                    <li className="flex justify-center items-center w-[40px] h-[40px]">
                      <PaginationLink title={2} />
                    </li>
                    <li className="flex justify-center items-center w-[40px] h-[40px]">
                      <PaginationLink title={3} />
                    </li>
                    <li className="flex justify-center items-center w-[40px] h-[40px]">
                      <PaginationLink title={4} />
                    </li>
                    <li className="flex justify-center items-center w-[40px] h-[40px]">
                      <PaginationLink title={5} />
                    </li>
                    <li className="flex justify-center items-center w-[40px] h-[40px]">
                      <PaginationLink title={6} />
                    </li>
                    <li className="flex justify-center items-center w-[40px] h-[40px]">
                      <PaginationLink title={7} />
                    </li>
                    <li className="flex justify-center items-center w-[40px] h-[40px]">
                      <PaginationLink title={8} />
                    </li>
                  </ul>
                  <button className="cursor-pointer p-[8px]">
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
                        d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z"
                        fill="#414141"
                      />
                    </svg>
                  </button>
                  <button className="cursor-pointer p-[8px]">
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
                        d="M12.6464 6.64645C12.8417 6.45118 13.1583 6.45118 13.3536 6.64645L18.3536 11.6464C18.5488 11.8417 18.5488 12.1583 18.3536 12.3536L13.3536 17.3536C13.1583 17.5488 12.8417 17.5488 12.6464 17.3536C12.4512 17.1583 12.4512 16.8417 12.6464 16.6464L17.2929 12L12.6464 7.35355C12.4512 7.15829 12.4512 6.84171 12.6464 6.64645Z"
                        fill="#414141"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.64645 6.64645C5.84171 6.45118 6.15829 6.45118 6.35355 6.64645L11.3536 11.6464C11.5488 11.8417 11.5488 12.1583 11.3536 12.3536L6.35355 17.3536C6.15829 17.5488 5.84171 17.5488 5.64645 17.3536C5.45118 17.1583 5.45118 16.8417 5.64645 16.6464L10.2929 12L5.64645 7.35355C5.45118 7.15829 5.45118 6.84171 5.64645 6.64645Z"
                        fill="#414141"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Category;
