import Container from "@/components/container/Container";
import Crumbs from "@/components/crumbs/Crumbs";
import Title from "@/components/title/Title";
import cartItem1 from "@images/cart-item.png";
import { Helmet } from "react-helmet-async";
import { Switch } from "@mui/material";
import Button from "@/components/button/Button";

const ShoppingCart = () => {
  return (
    <>
      <Helmet>
        <title>Корзина</title>
      </Helmet>
      <div className="pt-[24px] pb-[80px]">
        <Container>
          <div className="mb-[24px]">
            <Crumbs page="Корзина" />
          </div>
          <div className="relative inline-block">
            <Title className="mb-[60px]">
              <span>Корзина</span>
            </Title>
            <span className="absolute inline-flex items-start justify-start right-[-40px] top-[0] w-[26px] h-[32px] text-[#fff] bg-[#FF6633] text-[16px] font-normal p-[4px_8px] rounded-[4px]">
              <span>3</span>
            </span>
          </div>
          <div className="flex gap-[60px]">
            <div className="grow">
              <div className="flex gap-[40px] mb-[24px]">
                <button className="flex items-center gap-[8px] text-[12px] leading-[150%] text-[#606060] cursor-pointer">
                  <span className="w-[24px] h-[24px] p-[4px] rounded-[4px] bg-[#70C05B]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 8.00001C3 7.81591 3.14924 7.66667 3.33333 7.66667H12.6667C12.8508 7.66667 13 7.81591 13 8.00001C13 8.1841 12.8508 8.33334 12.6667 8.33334H3.33333C3.14924 8.33334 3 8.1841 3 8.00001Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span> Выделить всё</span>
                </button>
                <button className="text-[12px] leading-[150%] text-[#FF6633] cursor-pointer">
                  Удалить выбранные
                </button>
              </div>
              <div>
                <div className="mb-[24px] hover:shadow-[4px_8px_16px_rgba(255,102,51,0.2)] relative pb-[10px] pr-[8px] cursor-pointer flex w-[100%] bg-[#fff] rounded-[4px] shadow-[1px_2px_4px_rgba(0,0,0,0.1)]">
                  <div className="absolute top-[-8px] left-[8px] border border-[#fff] flex items-center justify-center border-[#fff] w-[24px] h-[24px] p-[4px] rounded-[4px] bg-[#70C05B]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.5692 4.43096C13.6994 4.56113 13.6994 4.77219 13.5692 4.90236L6.23587 12.2357C6.10569 12.3659 5.89464 12.3659 5.76446 12.2357L2.43113 8.90236C2.30095 8.77219 2.30095 8.56113 2.43113 8.43096C2.5613 8.30078 2.77236 8.30078 2.90253 8.43096L6.00016 11.5286L13.0978 4.43096C13.228 4.30078 13.439 4.30078 13.5692 4.43096Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="w-[80px] h-[60px] rounded-[4px] shadow-[1px_2px_4px_rgba(0,0,0,0.1)] mr-[8px]">
                    <img src={cartItem1} alt="order" />
                  </div>
                  <div className="mr-[18px] w-[536px]">
                    <div className="text-[16px] text-[#414141] leading-[150%] mt-[10px] mb-[10px]">
                      Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»
                    </div>
                    <div className="flex items-center gap-[4px]">
                      <span className="text-[#414141] text-[12px] font-bold leading-[150%]">
                        44,50 ₽
                      </span>
                      <span className="text-[12px] leading-[150%] text-[#606060]">
                        за шт.
                      </span>
                    </div>
                  </div>
                  <div className="bg-[#70C05B] mt-[10px] mr-[16px] cursor-pointer flex gap-[8px] justify-center items-center rounded-[4px] w-[100px] h-[40px]">
                    <button className="cursor-pointer">
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
                          fill="white"
                        />
                      </svg>
                    </button>
                    <span className="text-[#fff]">2</span>
                    <button className="cursor-pointer">
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
                          d="M12 4.5C12.2761 4.5 12.5 4.72386 12.5 5V19C12.5 19.2761 12.2761 19.5 12 19.5C11.7239 19.5 11.5 19.2761 11.5 19V5C11.5 4.72386 11.7239 4.5 12 4.5Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="text-[#414141] text-[18px] leading-[150%] font-bold mt-[8px] grow text-right">
                    89,00 ₽
                  </div>
                </div>
                <div className="mb-[24px] hover:shadow-[4px_8px_16px_rgba(255,102,51,0.2)] relative pb-[10px] pr-[8px] cursor-pointer flex w-[100%] bg-[#fff] rounded-[4px] shadow-[1px_2px_4px_rgba(0,0,0,0.1)]">
                  <div className="absolute top-[-8px] left-[8px] border border-[#fff] flex items-center justify-center border-[#fff] w-[24px] h-[24px] p-[4px] rounded-[4px] bg-[#70C05B]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.5692 4.43096C13.6994 4.56113 13.6994 4.77219 13.5692 4.90236L6.23587 12.2357C6.10569 12.3659 5.89464 12.3659 5.76446 12.2357L2.43113 8.90236C2.30095 8.77219 2.30095 8.56113 2.43113 8.43096C2.5613 8.30078 2.77236 8.30078 2.90253 8.43096L6.00016 11.5286L13.0978 4.43096C13.228 4.30078 13.439 4.30078 13.5692 4.43096Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="w-[80px] h-[60px] rounded-[4px] shadow-[1px_2px_4px_rgba(0,0,0,0.1)] mr-[8px]">
                    <img src={cartItem1} alt="order" />
                  </div>
                  <div className="mr-[18px] w-[536px]">
                    <div className="text-[16px] text-[#414141] leading-[150%] mt-[10px] mb-[10px]">
                      Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»
                    </div>
                    <div className="flex items-center gap-[4px]">
                      <span className="flex flex-col mr-[8px]">
                        <span className="text-[#414141] text-[12px] font-bold leading-[150%]">
                          44,50 ₽
                        </span>
                        <span className="text-[12px] text-[#BFBFBF] leading-[150%]">
                          С картой
                        </span>
                      </span>
                      <span className="mr-[8px]">
                        <span className="flex flex-col">
                          <span className="pl-[6px] text-[12px] leading-[150%] text-[#606060]">
                            50,50 ₽ за шт.
                          </span>
                          <span className="text-[12px] text-[#BFBFBF] leading-[150%]">
                            Обычная
                          </span>
                        </span>
                      </span>
                      <span className="inline-flex items-start justify-start text-[#fff] bg-[#FF6633] text-[16px] font-normal p-[4px_8px] rounded-[4px]">
                        <span>-10%</span>
                      </span>
                    </div>
                  </div>
                  <div className="bg-[#70C05B] mt-[10px] mr-[16px] cursor-pointer flex gap-[8px] justify-center items-center rounded-[4px] w-[100px] h-[40px]">
                    <button className="cursor-pointer">
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
                          fill="white"
                        />
                      </svg>
                    </button>
                    <span className="text-[#fff]">2</span>
                    <button className="cursor-pointer">
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
                          d="M12 4.5C12.2761 4.5 12.5 4.72386 12.5 5V19C12.5 19.2761 12.2761 19.5 12 19.5C11.7239 19.5 11.5 19.2761 11.5 19V5C11.5 4.72386 11.7239 4.5 12 4.5Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex flex-col mt-[8px] grow text-right">
                    <span className="text-[#414141] text-[18px] leading-[150%] font-bold ">
                      80,10 ₽
                    </span>

                    <span className="text-[16px] leading-[150%] line-through text-[#8F8F8F]">
                      89,00 ₽
                    </span>
                  </div>
                </div>
                <div className="mb-[24px] hover:shadow-[4px_8px_16px_rgba(255,102,51,0.2)] relative pb-[10px] pr-[8px] cursor-pointer flex w-[100%] bg-[#fff] rounded-[4px] shadow-[1px_2px_4px_rgba(0,0,0,0.1)]">
                  <div className="absolute top-[-8px] left-[8px] border border-[#fff] flex items-center justify-center border-[#fff] w-[24px] h-[24px] p-[4px] rounded-[4px] bg-[#70C05B]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.5692 4.43096C13.6994 4.56113 13.6994 4.77219 13.5692 4.90236L6.23587 12.2357C6.10569 12.3659 5.89464 12.3659 5.76446 12.2357L2.43113 8.90236C2.30095 8.77219 2.30095 8.56113 2.43113 8.43096C2.5613 8.30078 2.77236 8.30078 2.90253 8.43096L6.00016 11.5286L13.0978 4.43096C13.228 4.30078 13.439 4.30078 13.5692 4.43096Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="w-[80px] h-[60px] rounded-[4px] shadow-[1px_2px_4px_rgba(0,0,0,0.1)] mr-[8px]">
                    <img src={cartItem1} alt="order" />
                  </div>
                  <div className="mr-[18px] w-[536px]">
                    <div className="text-[16px] text-[#414141] leading-[150%] mt-[10px] mb-[10px]">
                      Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»
                    </div>
                    <div className="flex items-center gap-[4px]">
                      <span className="text-[#414141] text-[12px] font-bold leading-[150%]">
                        44,50 ₽
                      </span>
                      <span className="text-[12px] leading-[150%] text-[#606060]">
                        за шт.
                      </span>
                    </div>
                  </div>
                  <div className="bg-[#70C05B] mt-[10px] mr-[16px] cursor-pointer flex gap-[8px] justify-center items-center rounded-[4px] w-[100px] h-[40px]">
                    <button className="cursor-pointer">
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
                          fill="white"
                        />
                      </svg>
                    </button>
                    <span className="text-[#fff]">2</span>
                    <button className="cursor-pointer">
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
                          d="M12 4.5C12.2761 4.5 12.5 4.72386 12.5 5V19C12.5 19.2761 12.2761 19.5 12 19.5C11.7239 19.5 11.5 19.2761 11.5 19V5C11.5 4.72386 11.7239 4.5 12 4.5Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="text-[#414141] text-[18px] leading-[150%] font-bold mt-[8px] grow text-right">
                    89,00 ₽
                  </div>
                </div>
                <div className="opacity-[50%] mb-[24px] hover:shadow-[4px_8px_16px_rgba(255,102,51,0.2)] relative pb-[10px] pr-[8px] cursor-pointer flex w-[100%] bg-[#fff] rounded-[4px] shadow-[1px_2px_4px_rgba(0,0,0,0.1)]">
                  <div className="absolute top-[-8px] left-[8px] border flex items-center justify-center border-[#BFBFBF] w-[24px] h-[24px] p-[4px] rounded-[4px] bg-[#fff]"></div>
                  <div className="w-[80px] h-[60px] rounded-[4px] shadow-[1px_2px_4px_rgba(0,0,0,0.1)] mr-[8px]">
                    <img src={cartItem1} alt="order" />
                  </div>
                  <div className="mr-[18px] w-[536px]">
                    <div className="text-[16px] text-[#414141] leading-[150%] mt-[10px] mb-[10px]">
                      Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»
                    </div>
                    <div className="flex items-center gap-[4px]">
                      <span className="text-[#414141] text-[12px] font-bold leading-[150%]">
                        44,50 ₽
                      </span>
                      <span className="text-[12px] leading-[150%] text-[#606060]">
                        за шт.
                      </span>
                    </div>
                  </div>
                  <div className="text-[#414141] text-[16px] leading-[150%] mt-[8px] grow text-right">
                    Нет в наличии
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar w-[272px]">
              <div className="flex justify-start items-center gap-[10px] mb-[20px]">
                <Switch />
                <span className="text-[16px] leading-[150%] text-[#8F8F8F]">
                  Списать 200 ₽
                </span>
              </div>
              <div className="mb-[24px] text-[16px] leading-[150%] text-[#8f8f8f]">
                На карте накоплено 200 ₽
              </div>
              <hr className="border-none h-[2px] bg-[#F3F2F1] mb-[28px]" />
              <div className="mb-[20px]">
                <div className="text-[16px] leading-[150%] flex justify-between items-center mb-[10px]">
                  <div className="text-[#8F8F8F]">3 товара</div>
                  <div className=" text-[#414141]">258,10 ₽</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-[16px] leading-[150%] text-[#8F8F8F]">
                    Скидка
                  </div>
                  <div className="text-[16px] font-bold leading-[150%] text-[#FF6633]">
                    -8,01 ₽
                  </div>
                </div>
              </div>
              <hr className="border-none h-[2px] bg-[#F3F2F1] mb-[28px]" />
              <div className="flex justify-between items-center mb-[4px]">
                <div className="text-[16px] leading-[150%] text-[#8F8F8F]">
                  Итог
                </div>
                <div className="text-[24px] font-bold leading-[150%]">
                  250,09 ₽
                </div>
              </div>
              <div className="flex gap-[8px] justify-center items-center mb-[24px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.1883 6.66661H0.811961C0.343143 6.66661 -0.0396916 7.05823 0.0033005 7.52051C0.494639 13.0113 5.67826 17.3333 12.0001 17.3333C18.322 17.3333 23.5056 13.0133 23.997 7.52051C24.0379 7.05823 23.6571 6.66661 23.1883 6.66661Z"
                    fill="#70C05B"
                  />
                </svg>
                <span className="text-[#70C05B] flex gap-[4px]">
                  <span>Вы получяете</span>
                  <span className="font-bold">100 бонусов</span>
                </span>
              </div>
              <div className="inline-block bg-[#D80000] text-[#fff] p-[3px_8px] rounded-[4px] text-[12px] leading-[150%] mb-[16px]">
                Минимальная сумма заказа 1000р
              </div>
              <div>
                <Button className="w-[100%] bg-[#FCD5BA] text-[#FF6633]">
                  Оформить заказ
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ShoppingCart;
