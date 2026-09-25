import Card from "@/components/card/Card";
import Container from "@/components/container/Container";
import product1 from "@images/product1.png";
import { Helmet } from "react-helmet-async";

const Search = () => {
  return (
    <>
      <Helmet>
        <title>Результаты поиска</title>
      </Helmet>
      <div className="p-[80px_0px]">
        <Container>
          <header>
            <h2 className="text-[36px] mb-[24px] font-bold">
              Результат поиска
            </h2>
          </header>
          <div className="text-[24px] leading-[150%] text-[#414141] mb-[40px]">
            по запросу <span className="text-[#FF6633]">Еда</span>
          </div>
          <div className="grid grid-cols-4 gap-[40px]">
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
            <Card img={product1} rating={2} />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Search;
