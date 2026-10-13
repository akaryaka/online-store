import Card from "@/widgets/card/Card";
import product1 from "@images/product1.png";
import product2 from "@images/product2.png";
import product3 from "@images/product3.png";
import product4 from "@images/product4.png";

const ProductPurchases = () => {
  return (
    <>
      <div className="ml-[auto] mr-[auto] mb-[120px]">
        <header className="flex justify-between items-center mb-[40px] pr-[7px]">
          <h2 className="text-[36px] font-bold">С этим товаров покупают</h2>
        </header>
        <div className="grid gap-[40px] grid-cols-4">
          <Card
            img={product1}
            rating={2}
            price={""}
            title={""}
            type={""}
            favorites={false}
          />
          <Card
            img={product2}
            rating={3}
            price={""}
            title={""}
            type={""}
            favorites={false}
          />
          <Card
            img={product3}
            rating={5}
            price={""}
            title={""}
            type={""}
            favorites={false}
          />
          <Card
            img={product4}
            rating={4}
            price={""}
            title={""}
            type={""}
            favorites={false}
          />
        </div>
      </div>
    </>
  );
};

export default ProductPurchases;
