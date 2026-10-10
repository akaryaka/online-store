import Button from "@/shared/ui/button/Button";
import Notice from "@/shared/ui/notice/Notice";
import Card from "@/widgets/card/Card";
import CalendarIcon from "@/widgets/icons/CalendarIcon";
import EyeIcon from "@/widgets/icons/EyeIcon";
import product1 from "@images/product1.png";

const OrderItem = () => {
  return (
    <>
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
    </>
  );
};

export default OrderItem;
