import Card from "@/widgets/card/CardSale";
import Container from "@/widgets/container/Container";
import product1 from "@images/product1.png";
import Layout from "@app/layout/Layout";

const Search = () => {
  return (
    <>
      <Layout title="Результаты поиска">
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
      </Layout>
    </>
  );
};

export default Search;
