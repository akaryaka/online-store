import { useState } from "react";
import { Link } from "react-router";
import { Switch, Slider } from "@mui/material";
import ArrowIcon from "@/widgets/icons/ArrowIcon";
import Container from "@/widgets/container/Container";
import Title from "@/shared/ui/title/Title";
import Card from "@/widgets/card/Card";
import Button from "@shared/ui/button/Button";
import ResetIcon from "@/widgets/icons/resetIcon/ResetIcon";
import PaginationLink from "@/shared/ui/paginationLink/PaginationLink";
import product1 from "@images/product1.png";
import Layout from "@app/layout/Layout";
import MinusIcon from "@/widgets/icons/MinusIcon";
import ChevronDoubleIcon from "@/widgets/icons/ChevronDoubleIcon";
import ChevronDownIcon from "@/widgets/icons/ChevronDownIcon";

const Category = () => {
  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number[]) => {
    setValue(newValue);
  };
  return (
    <>
      <Layout title="Каталог | Молоко, сыр, яйцо">
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
                  to="/category"
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
                <Button className="text-[#606060] bg-[#F3F2F1]">
                  Товары нашего производства
                </Button>
                <Button className="text-[#606060] bg-[#F3F2F1]">
                  Полезное питание
                </Button>
                <Button className="text-[#606060] bg-[#F3F2F1]">Без ГМО</Button>
              </div>
              <div className="flex gap-[40px] justify-between">
                <div className="sidebar w-[272px]">
                  <Button className="text-[#606060] bg-[#F3F2F1] text-left w-[100%] mb-[40px]">
                    <span className="font-bold text-[16px] leading-[150%] text-[#414141]">
                      Фильтр
                    </span>
                  </Button>
                  <div className="flex justify-between items-center mb-[13px]">
                    <div className="text-[16px] leading-[150%]">Цена</div>
                    <Button className="text-[#606060] bg-[#F3F2F1]">
                      Очистить
                    </Button>
                  </div>
                  <div className="flex items-center mb-[40px]">
                    <input
                      className="w-[124px] border border-[#BFBFBF] rounded-[4px] bg-[#fff] p-[8px_16px]"
                      type="text"
                      value={1}
                    />
                    <MinusIcon fill="#414141" />
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
                  <div className="flex gap-[24px] mb-[40px]">
                    <Button className="text-[#fff] bg-[#70C05B] flex items-center gap-[8px]">
                      <span>Фильтр 4</span>
                      <ResetIcon fill="#fff" />
                    </Button>
                    <Button className="text-[#fff] bg-[#70C05B] flex items-center gap-[8px]">
                      <span>Цена от 99 до 2599</span>
                      <ResetIcon fill="#fff" />
                    </Button>
                    <Button className="text-[#606060] bg-[#F3F2F1] flex items-center gap-[8px]">
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
                    <Button className="text-[#606060] bg-[#F3F2F1]">
                      Показать ещё
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <button className="cursor-pointer p-[8px]">
                      <ChevronDoubleIcon />
                    </button>
                    <button className="cursor-pointer p-[8px] ">
                      <ChevronDownIcon fill="#414141" rotateValue="90deg" />
                    </button>
                    <ul className="flex items-center justify-center gap-[16px]">
                      <li className="flex justify-center items-center w-[40px] h-[40px]">
                        <PaginationLink className="text-primary" title={1} />
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
                      <ChevronDownIcon fill="#414141" rotateValue="-90deg" />
                    </button>
                    <button className="cursor-pointer p-[8px]">
                      <ChevronDoubleIcon rotateValue="-180deg" />
                    </button>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Category;
