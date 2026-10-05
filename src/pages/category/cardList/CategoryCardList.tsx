import ChevronDoubleIcon from "@/widgets/icons/ChevronDoubleIcon";
import ChevronDownIcon from "@/widgets/icons/ChevronDownIcon";
import ResetIcon from "@/widgets/icons/resetIcon/ResetIcon";
import Button from "@/shared/ui/button/Button";
import Card from "@/widgets/card/Card";
import product1 from "@images/product1.png";
import CardSale from "@/widgets/card/CardSale";
import CategoryPagination from "../pagination/CategoryPagination";

const CategoryCardList = () => {
  return (
    <>
      <div className="content grow">
        <div className="flex gap-[24px] mb-[40px]">
          <Button className="text-[#fff] bg-[#70C05B] flex items-center gap-[8px]">
            <span>Фильтр 4</span>
            <ResetIcon fill="#fff" />
          </Button>
          <Button className="text-[#fff] bg-[#70C05B] flex items-center gap-[8px]">
            <span>Цена от 99 до 2599</span>
            <ResetIcon fill="#fff" />
          </Button>
          <Button className="text-[#606060] bg-[#F3F2F1] flex items-center gap-[8px]">
            <span>Очистить фильтры</span>
            <ResetIcon fill="#414141" />
          </Button>
        </div>
        <div className="cards grid grid-cols-3 grid-rows-2 gap-[40px] mb-[40px]">
          <Card
            title="Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
            favorites={false}
            price="139,99"
            img={product1}
            rating={2}
          />
          <CardSale
            title="Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное ..."
            favorites={false}
            price="140,50"
            priceSales="69,99"
            img={product1}
            rating={2}
          />
          <CardSale
            title="Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное ..."
            favorites={false}
            price="140,50"
            priceSales="69,99"
            img={product1}
            rating={2}
          />
          <Card
            title="Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
            favorites={false}
            price="139,99"
            img={product1}
            rating={2}
          />{" "}
          <Card
            title="Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
            favorites={false}
            price="139,99"
            img={product1}
            rating={2}
          />{" "}
          <Card
            title="Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
            favorites={false}
            price="139,99"
            img={product1}
            rating={2}
          />
        </div>
        <div className="flex justify-center mb-[40px]">
          <Button className="text-[#606060] bg-[#F3F2F1]">Показать ещё</Button>
        </div>
        <div className="flex justify-center">
          <button className="cursor-pointer p-[8px]">
            <ChevronDoubleIcon />
          </button>
          <button className="cursor-pointer p-[8px] ">
            <ChevronDownIcon fill="#414141" rotateValue="90deg" />
          </button>
          <CategoryPagination />
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

export default CategoryCardList;
