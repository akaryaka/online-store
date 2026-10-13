import ChevronDoubleIcon from "@/widgets/icons/ChevronDoubleIcon";
import ChevronDownIcon from "@/widgets/icons/ChevronDownIcon";
import ResetIcon from "@/widgets/icons/resetIcon/ResetIcon";
import Button from "@/shared/ui/button/Button";
import Card from "@/widgets/card/Card";
import product1 from "@images/product1.png";
import CategoryPagination from "../pagination/CategoryPagination";
import Text from "@/shared/ui/text";

const CategoryCardList = () => {
  return (
    <>
      <div className="content grow">
        <div className="flex gap-[24px] mb-[40px]">
          <Button
            type="text-btn"
            size="s"
            rightIcon={<ResetIcon fill="#fff" />}
            accent="secondary"
            className="p-[8px] flex items-center gap-[8px]"
          >
            <Text size="s" className="mr-[auto]">
              Фильтр 4
            </Text>
          </Button>
          <Button
            type="text-btn"
            size="s"
            rightIcon={<ResetIcon fill="#fff" />}
            accent="secondary"
            className="p-[8px] flex items-center gap-[8px]"
          >
            <Text size="s">Цена от 99 до 2599</Text>
          </Button>
          <Button
            type="text-btn"
            size="s"
            accent="greyscale"
            rightIcon={<ResetIcon fill="#414141" />}
            className="items-center gap-[8px]"
          >
            <Text size="s">Очистить фильтры</Text>
          </Button>
        </div>
        <div className="cards grid grid-cols-3 grid-rows-2 gap-[40px] mb-[40px]">
          <Card
            type="product"
            title="Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
            favorites={false}
            price="139,99"
            img={product1}
            rating={2}
          />
          <Card
            type="sale"
            title="Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное ..."
            favorites={false}
            price="140,50"
            priceSales="69,99"
            img={product1}
            rating={2}
          />
          <Card
            type="sale"
            title="Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное ..."
            favorites={false}
            price="140,50"
            priceSales="69,99"
            img={product1}
            rating={2}
          />
          <Card
            type="product"
            title="Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
            favorites={false}
            price="139,99"
            img={product1}
            rating={2}
          />
          <Card
            type="product"
            title="Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
            favorites={false}
            price="139,99"
            img={product1}
            rating={2}
          />
          <Card
            type="product"
            title="Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»"
            favorites={false}
            price="139,99"
            img={product1}
            rating={2}
          />
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
