import PaginationLink from "@/shared/ui/paginationLink/PaginationLink";
import ChevronDoubleIcon from "@/widgets/icons/ChevronDoubleIcon";
import ChevronDownIcon from "@/widgets/icons/ChevronDownIcon";
import ResetIcon from "@/widgets/icons/resetIcon/ResetIcon";
import Button from "@/shared/ui/button/Button";
import product1 from "@images/product1.png";
import Card from "@/widgets/card/Card";
import CardSale from "@/widgets/card/CardSale";

const FavoritesContent = () => {
  return (
    <>
      <div className="content grow">
        <div className="flex  gap-[24px] mb-[40px]">
          <Button className="bg-[#70C05B] text-[#fff] flex items-center gap-[8px]">
            <span>Цена от 99 до 2599</span>
            <ResetIcon fill="#fff" />
          </Button>
          <Button className="bg-[#F3F2F1] text-[#606060] flex items-center gap-[8px]">
            <span>Очистить фильтры</span>
            <ResetIcon fill="#414141" />
          </Button>
        </div>
        <div className="cards grid grid-cols-3 grid-rows-2 gap-[40px] mb-[40px]">
          <Card
            title="Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
            price="139,99"
            favorites={false}
            img={product1}
            rating={2}
          />
          <CardSale
            title="Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное..."
            price="140,50"
            priceSales="69,99"
            favorites={false}
            img={product1}
            rating={2}
          />
          <CardSale
            title="Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное..."
            price="140,50"
            priceSales="69,99"
            favorites={false}
            img={product1}
            rating={2}
          />
          <Card
            title="Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
            price="139,99"
            favorites={false}
            img={product1}
            rating={2}
          />{" "}
          <Card
            title="Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
            price="139,99"
            favorites={false}
            img={product1}
            rating={2}
          />{" "}
          <Card
            title="Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
            price="139,99"
            favorites={false}
            img={product1}
            rating={2}
          />
        </div>
        <div className="flex justify-center mb-[40px]">
          <Button className="bg-[#F3F2F1] text-[#606060]">Показать ещё</Button>
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
    </>
  );
};

export default FavoritesContent;
