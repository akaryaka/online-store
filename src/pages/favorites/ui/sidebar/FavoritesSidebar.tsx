import MinusIcon from "@/widgets/icons/MinusIcon";
import Button from "@/shared/ui/button/Button";
// import MinusIcon from "@/widgets/icons/MinusIcon";
import { Slider, Switch } from "@mui/material";
import { useState } from "react";

const FavoritesSidebar = () => {
  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number[]) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="sidebar w-[272px]">
        <Button className="bg-[#F3F2F1] text-[#606060] text-left w-[100%] mb-[40px]">
          <span className="font-bold text-[16px] leading-[150%] text-[#414141]">
            Фильтр
          </span>
        </Button>
        <div className="flex justify-between items-center mb-[13px]">
          <div className="text-[16px] leading-[150%]">Цена</div>
          <Button className="bg-[#F3F2F1] text-[#606060]">Очистить</Button>
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
    </>
  );
};

export default FavoritesSidebar;
