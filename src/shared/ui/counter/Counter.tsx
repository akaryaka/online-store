import MinusIcon from "@/widgets/icons/MinusIcon";
import PlusIcon from "@/widgets/icons/PlusIcon";
import { useState } from "react";

const Counter = () => {
  const [countValue, setCountValue] = useState(0);
  const increment = () => {
    setCountValue((value) => value + 1);
  };

  const decrement = () => {
    if (countValue != 0) {
      setCountValue((value) => value - 1);
    }
  };

  return (
    <>
      <div className="bg-[#70C05B] mt-[10px] mr-[16px] cursor-pointer flex gap-[8px] justify-center items-center rounded-[4px] w-[100px] h-[40px]">
        <button onClick={decrement} className="cursor-pointer">
          <MinusIcon fill="#fff" />
        </button>
        <span className="text-[#fff]">{countValue}</span>
        <button onClick={increment} className="cursor-pointer">
          <PlusIcon fill="#fff" />
        </button>
      </div>
    </>
  );
};

export default Counter;
