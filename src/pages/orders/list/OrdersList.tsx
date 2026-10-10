import Button from "@/shared/ui/button/Button";
import CalendarIcon from "@/widgets/icons/CalendarIcon";
import EyeIcon from "@/widgets/icons/EyeIcon";
import Card from "@/widgets/card/Card";
import product1 from "@images/product1.png";

const OrdersList = () => {
  return (
    <>
      <div>
        <div className="order mb-[120px]">
          <header className="flex justify-between mb-[44px]">
            <div className="flex items-center gap-[24px]">
              <div className="date flex gap-[24px]">
                <span className="text-[24px] leading-[150%] font-bold">
                  01.04.2021
                </span>
                <span className="text-[24px] leading-[150%] font-bold">
                  11:00-14:00
                </span>
              </div>
              <div className="text-[#414141] bg-[#F3F2F1]">В процессе</div>
            </div>
            <div className="flex items-center gap-[24px]">
              <div className="price text-[24px] leading-[150%]">3 006,83 ₽</div>
              <Button className="text-[#fff] bg-[#70C05B] flex items-center gap-[8px]">
                <CalendarIcon />
                <span>Когда доставить</span>
              </Button>
            </div>
          </header>
          <div className="grid grid-cols-4 grid-rows-1 gap-[40px] mb-[40px]">
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
          </div>
          <div className="flex justify-center mb-[40px]">
            <Button className="text-[#606060] bg-[#F3F2F1] flex gap-[8px]">
              <EyeIcon />
              <span>Просмотреть заказ</span>
            </Button>
          </div>
        </div>
        <div className="order mb-[120px]">
          <header className="flex justify-between mb-[44px]">
            <div className="flex items-center gap-[24px]">
              <div className="date flex gap-[24px]">
                <span className="text-[24px] leading-[150%] font-bold">
                  15.09.2020
                </span>
                <span className="text-[24px] leading-[150%] font-bold">
                  14:00-18:00
                </span>
              </div>
              <div className="bg-[#D80000] text-[#fff]">Не доставили</div>
            </div>
            <div className="flex items-center gap-[24px]">
              <div className="price text-[24px] leading-[150%]">1 006,00 ₽</div>
              <Button className="text-[#fff] bg-[#FF6633] flex items-center gap-[8px]">
                <span>Заказать</span>
              </Button>
            </div>
          </header>
          <div className="grid grid-cols-4 grid-rows-1 gap-[40px] mb-[40px]">
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
          </div>
        </div>
        <div className="order mb-[120px]">
          <header className="flex justify-between mb-[44px]">
            <div className="flex items-center gap-[24px]">
              <div className="date flex gap-[24px]">
                <span className="text-[24px] leading-[150%] font-bold">
                  15.09.2020
                </span>
                <span className="text-[24px] leading-[150%] font-bold">
                  18:00-20:00
                </span>
              </div>
              <div className="text-[#fff] bg-[#D80000]">Возврат</div>
            </div>
            <div className="flex items-center gap-[24px]">
              <div className="price text-[24px] leading-[150%]">1 321,20 ₽</div>
              <Button className="text-[#fff] bg-[#FF6633] flex items-center gap-[8px]">
                <span>Заказать</span>
              </Button>
            </div>
          </header>
          <div className="grid grid-cols-4 grid-rows-1 gap-[40px] mb-[40px]">
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
          </div>
        </div>
        <div className="order">
          <header className="flex justify-between mb-[44px]">
            <div className="flex items-center gap-[24px]">
              <div className="date flex gap-[24px]">
                <span className="text-[24px] leading-[150%] font-bold">
                  15.09.2020
                </span>
                <span className="text-[24px] leading-[150%] font-bold">
                  14:00-18:00
                </span>
              </div>
              <div className="text-[#fff] bg-[#70C05B]">Получен</div>
            </div>
            <div className="flex items-center gap-[24px]">
              <div className="price text-[24px] leading-[150%]">1 321,20 ₽</div>
              <Button className="text-[#fff] bg-[#FF6633] flex items-center gap-[8px]">
                <span>Заказать</span>
              </Button>
            </div>
          </header>
          <div className="grid grid-cols-4 grid-rows-1 gap-[40px] mb-[40px]">
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
          </div>
        </div>
        <div className="order mb-[120px]">
          <header className="flex justify-between mb-[44px]">
            <div className="flex items-center gap-[24px]">
              <div className="date flex gap-[24px]">
                <span className="text-[24px] leading-[150%] font-bold">
                  01.04.2021
                </span>
                <span className="text-[24px] leading-[150%] font-bold">
                  11:00-14:00
                </span>
              </div>
              <div className="text-[#414141] bg-[#F3F2F1]">В процессе</div>
            </div>
            <div className="flex items-center gap-[24px]">
              <div className="price text-[24px] leading-[150%]">3 006,83 ₽</div>
              <Button className="text-[#fff] bg-[#70C05B] flex items-center gap-[8px]">
                <CalendarIcon />
                <span>Когда доставить</span>
              </Button>
            </div>
          </header>
          <div className="grid grid-cols-4 grid-rows-1 gap-[40px] mb-[40px]">
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
          </div>
          <div className="flex justify-center mb-[40px]">
            <Button className="text-[#606060] bg-[#F3F2F1] flex gap-[8px]">
              <EyeIcon />
              <span>Просмотреть заказ</span>
            </Button>
          </div>
        </div>
        <div className="order mb-[120px]">
          <header className="flex justify-between mb-[44px]">
            <div className="flex items-center gap-[24px]">
              <div className="date flex gap-[24px]">
                <span className="text-[24px] leading-[150%] font-bold">
                  15.09.2020
                </span>
                <span className="text-[24px] leading-[150%] font-bold">
                  14:00-18:00
                </span>
              </div>
              <div className="bg-[#D80000] text-[#fff]">Не доставили</div>
            </div>
            <div className="flex items-center gap-[24px]">
              <div className="price text-[24px] leading-[150%]">1 006,00 ₽</div>
              <Button className="text-[#fff] bg-[#FF6633] flex items-center gap-[8px]">
                <span>Заказать</span>
              </Button>
            </div>
          </header>
          <div className="grid grid-cols-4 grid-rows-1 gap-[40px] mb-[40px]">
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
          </div>
        </div>
        <div className="order mb-[120px]">
          <header className="flex justify-between mb-[44px]">
            <div className="flex items-center gap-[24px]">
              <div className="date flex gap-[24px]">
                <span className="text-[24px] leading-[150%] font-bold">
                  15.09.2020
                </span>
                <span className="text-[24px] leading-[150%] font-bold">
                  18:00-20:00
                </span>
              </div>
              <div className="text-[#fff] bg-[#D80000]">Возврат</div>
            </div>
            <div className="flex items-center gap-[24px]">
              <div className="price text-[24px] leading-[150%]">1 321,20 ₽</div>
              <Button className="text-[#fff] bg-[#FF6633] flex items-center gap-[8px]">
                <span>Заказать</span>
              </Button>
            </div>
          </header>
          <div className="grid grid-cols-4 grid-rows-1 gap-[40px] mb-[40px]">
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
          </div>
        </div>
        <div className="order">
          <header className="flex justify-between mb-[44px]">
            <div className="flex items-center gap-[24px]">
              <div className="date flex gap-[24px]">
                <span className="text-[24px] leading-[150%] font-bold">
                  15.09.2020
                </span>
                <span className="text-[24px] leading-[150%] font-bold">
                  14:00-18:00
                </span>
              </div>
              <div className="text-[#fff] bg-[#70C05B]">Получен</div>
            </div>
            <div className="flex items-center gap-[24px]">
              <div className="price text-[24px] leading-[150%]">1 321,20 ₽</div>
              <Button className="text-[#fff] bg-[#FF6633] flex items-center gap-[8px]">
                <span>Заказать</span>
              </Button>
            </div>
          </header>
          <div className="grid grid-cols-4 grid-rows-1 gap-[40px] mb-[40px]">
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-[#606060] bg-[#F3F2F1] flex gap-[8px]">
            <span>Показать ещё</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersList;
