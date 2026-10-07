import { Switch } from "@mui/material";
import SmileIcon from "@/widgets/icons/SmileIcont";
import Button from "@/shared/ui/button/Button";

const ShoppingCartSidebar = () => {
  return (
    <>
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
          <div className="text-[16px] leading-[150%] text-[#8F8F8F]">Итог</div>
          <div className="text-[24px] font-bold leading-[150%]">250,09 ₽</div>
        </div>
        <div className="flex gap-[8px] justify-center items-center mb-[24px]">
          <SmileIcon />
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
    </>
  );
};

export default ShoppingCartSidebar;
