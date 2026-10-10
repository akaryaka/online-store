import Button from "@/shared/ui/button/Button";
import CalendarIcon from "@/widgets/icons/CalendarIcon";
import EyeIcon from "@/widgets/icons/EyeIcon";
import Card from "@/widgets/card/Card";
import product1 from "@images/product1.png";
import Notice from "@/shared/ui/notice/Notice";

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
              <Notice type="gray" size="m" text="В процессе" />
            </div>
            <div className="flex items-center gap-[24px]">
              <div className="price text-[24px] leading-[150%]">3 006,83 ₽</div>
              <Button
                leftIcon
                icon={<CalendarIcon />}
                accent="secondary"
                type="text-btn"
                className="w-[200px] flex justify-start items-center gap-[16px] p-[8px]"
              >
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
            <Button
              type="text-btn"
              accent="greyscale"
              leftIcon
              icon={<EyeIcon />}
              className="flex gap-[8px] p-[8px]"
            >
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
              <Notice type="error" size="m" text="Не доставили" />
            </div>
            <div className="flex items-center gap-[24px]">
              <div className="price text-[24px] leading-[150%]">1 006,00 ₽</div>
              <Button
                type="text-btn"
                accent="primary"
                className="w-[200px] flex justify-center items-center p-[8px]"
              >
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
              <Notice type="error" size="m" text="Возврат" />
            </div>
            <div className="flex items-center gap-[24px]">
              <div className="price text-[24px] leading-[150%]">1 321,20 ₽</div>
              <Button
                type="text-btn"
                accent="primary"
                className="w-[200px] flex justify-center items-center p-[8px]"
              >
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
              <Notice type="succes" size="m" text="Получен" />
            </div>
            <div className="flex items-center gap-[24px]">
              <div className="price text-[24px] leading-[150%]">1 321,20 ₽</div>
              <Button
                type="text-btn"
                accent="primary"
                className="w-[200px] flex justify-center items-center p-[8px]"
              >
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
          <Button type="text-btn" accent="greyscale" className="flex p-[8px]">
            Показать ещё
          </Button>
        </div>
      </div>
    </>
  );
};

export default OrdersList;
