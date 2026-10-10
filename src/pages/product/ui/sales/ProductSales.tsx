import Card from "@/widgets/card/Card";
import { Link } from "react-router";
import ArrowIcon from "@/widgets/icons/ArrowIcon";
import product1 from "@images/product1.png";
import product2 from "@images/product2.png";
import product3 from "@images/product3.png";
import product4 from "@images/product4.png";

const ProductSales = () => {
  return (
    <>
      <div className="ml-[auto] mr-[auto]">
        <header className="flex justify-between items-center mb-[40px] pr-[7px]">
          <h2 className="text-[36px] font-bold">Акции</h2>
          <Link className="flex leading-[150%] gap-[29px] mt-[12px]" to="/">
            <span>Все акции</span>
            <ArrowIcon />
          </Link>
        </header>
        <div className="grid gap-[40px] grid-cols-4">
          <Card img={product1} rating={2} />
          <Card img={product2} rating={3} />
          <Card img={product3} rating={5} />
          <Card img={product4} rating={4} />
        </div>
      </div>
    </>
  );
};

export default ProductSales;
