import Card from "@/widgets/card/CardSale";
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
          <Card img={product1} rating={2} />
          <Card img={product2} rating={3} />
          <Card img={product3} rating={5} />
          <Card img={product4} rating={4} />
        </div>
      </div>
    </>
  );
};

export default ProductPurchases;
