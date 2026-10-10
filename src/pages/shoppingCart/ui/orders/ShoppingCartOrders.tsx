import CheckIcon from "@/widgets/icons/CheckIcon";
import MinusIcon from "@/widgets/icons/MinusIcon";
import PlusIcon from "@/widgets/icons/PlusIcon";
import cartItem1 from "@images/cart-item.png";

const ShoppingCartOrders = () => {
  return (
    <>
      <div>
        <div className="mb-[24px] hover:shadow-[4px_8px_16px_rgba(255,102,51,0.2)] relative pb-[10px] pr-[8px] cursor-pointer flex w-[100%] bg-[#fff] rounded-[4px] shadow-[1px_2px_4px_rgba(0,0,0,0.1)]">
          <div className="absolute top-[-8px] left-[8px] border border-[#fff] flex items-center justify-center border-[#fff] w-[24px] h-[24px] p-[4px] rounded-[4px] bg-[#70C05B]">
            <CheckIcon fill="#fff" />
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
              <MinusIcon fill="#fff" />
            </button>
            <span className="text-[#fff]">2</span>
            <button className="cursor-pointer">
              <PlusIcon fill="#fff" />
            </button>
          </div>
          <div className="text-[#414141] text-[18px] leading-[150%] font-bold mt-[8px] grow text-right">
            89,00 ₽
          </div>
        </div>
        <div className="mb-[24px] hover:shadow-[4px_8px_16px_rgba(255,102,51,0.2)] relative pb-[10px] pr-[8px] cursor-pointer flex w-[100%] bg-[#fff] rounded-[4px] shadow-[1px_2px_4px_rgba(0,0,0,0.1)]">
          <div className="absolute top-[-8px] left-[8px] border border-[#fff] flex items-center justify-center border-[#fff] w-[24px] h-[24px] p-[4px] rounded-[4px] bg-[#70C05B]">
            <CheckIcon fill="#fff" />
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
              <MinusIcon fill="#fff" />
            </button>
            <span className="text-[#fff]">2</span>
            <button className="cursor-pointer">
              <PlusIcon fill="#fff" />
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
            <CheckIcon fill="#fff" />
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
              <MinusIcon fill="#fff" />
            </button>
            <span className="text-[#fff]">2</span>
            <button className="cursor-pointer">
              <PlusIcon fill="#fff" />
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
    </>
  );
};

export default ShoppingCartOrders;
