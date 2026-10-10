import MinusIcon from "@/widgets/icons/MinusIcon";

const ShoppingCartHeaderOrders = () => {
  return (
    <>
      <div className="flex gap-[40px] mb-[24px]">
        <button className="flex items-center gap-[8px] text-[12px] leading-[150%] text-[#606060] cursor-pointer">
          <span className="flex items-center justify-center w-[24px] h-[24px] p-[4px] rounded-[4px] bg-[#70C05B]">
            <MinusIcon fill="#fff" />
          </span>
          <span> Выделить всё</span>
        </button>
        <button className="text-[12px] leading-[150%] text-[#FF6633] cursor-pointer">
          Удалить выбранные
        </button>
      </div>
    </>
  );
};

export default ShoppingCartHeaderOrders;
