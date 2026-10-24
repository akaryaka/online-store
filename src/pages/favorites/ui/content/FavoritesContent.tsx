import PaginationLink from "@/shared/ui/paginationLink/PaginationLink";
import ChevronDoubleIcon from "@/widgets/icons/ChevronDoubleIcon";
import ChevronDownIcon from "@/widgets/icons/ChevronDownIcon";
import ResetIcon from "@/widgets/icons/resetIcon/ResetIcon";
import Button from "@/shared/ui/button/Button";
import product1 from "@images/product1.png";
import Card from "@/widgets/card/Card";
import Text from "@/shared/ui/text";

const FavoritesContent = () => {
  return (
    <>
      <div className="content grow">
        <div className="flex  gap-[24px] mb-[40px]">
          <Button
            type="text-btn"
            size="m"
            accent="secondary"
            rightIcon={<ResetIcon fill="#fff" />}
            className="p-[8px_16px] flex items-center gap-[8px]"
          >
            <Text size="s">Цена от 99 до 2599</Text>
          </Button>
          <Button
            type="text-btn"
            size="m"
            accent="greyscale"
            rightIcon={<ResetIcon fill="#414141" />}
            className="p-[8px_16px] flex items-center gap-[8px]"
          >
            <Text size="s">Очистить</Text>
          </Button>
        </div>
        <div className="cards grid grid-cols-3 grid-rows-2 gap-[40px] mb-[40px]">
          <Card
            type="product"
            title="Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
            price="139,99"
            favorites={false}
            img={product1}
            rating={2}
          />
          {/* <Card
            type="sale"
            title="Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное..."
            price="140,50"
            priceSales="69,99"
            favorites={false}
            img={product1}
            rating={2}
          />
          <Card
            type="sale"
            title="Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное..."
            price="140,50"
            priceSales="69,99"
            favorites={false}
            img={product1}
            rating={2}
          />
          <Card
            type="product"
            title="Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
            price="139,99"
            favorites={false}
            img={product1}
            rating={2}
          />
          <Card
            type="product"
            title="Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
            price="139,99"
            favorites={false}
            img={product1}
            rating={2}
          />
          <Card
            type="product"
            title="Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
            price="139,99"
            favorites={false}
            img={product1}
            rating={2}
          /> */}
        </div>
        <div className="flex justify-center mb-[40px]">
          <Button
            type="text-btn"
            accent="greyscale"
            size="m"
            className="p-[8px] w-[157px] justify-center items-center"
          >
            <Text size="s"> Показать ещё</Text>
          </Button>
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
              <PaginationLink className="text-primary" text={1} />
            </li>
            <li className="flex justify-center items-center w-[40px] h-[40px]">
              <PaginationLink text={2} />
            </li>
            <li className="flex justify-center items-center w-[40px] h-[40px]">
              <PaginationLink text={3} />
            </li>
            <li className="flex justify-center items-center w-[40px] h-[40px]">
              <PaginationLink text={4} />
            </li>
            <li className="flex justify-center items-center w-[40px] h-[40px]">
              <PaginationLink text={5} />
            </li>
            <li className="flex justify-center items-center w-[40px] h-[40px]">
              <PaginationLink text={6} />
            </li>
            <li className="flex justify-center items-center w-[40px] h-[40px]">
              <PaginationLink text={7} />
            </li>
            <li className="flex justify-center items-center w-[40px] h-[40px]">
              <PaginationLink text={8} />
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
