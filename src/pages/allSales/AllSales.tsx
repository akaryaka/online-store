import Layout from "@/app/layout";
import Container from "@/widgets/container";
import Crumbs from "@/widgets/crumbs";
import Title from "@/shared/ui/title";
import AllSalesList from "./list/AllSalesList";

const AllSales = () => {
  return (
    <>
      <Layout title="Все акции">
        <div className="pt-[24px] pb-[80px]">
          <div className="mb-[27px]">
            <Container>
              <Crumbs page="Все акции" />
            </Container>
          </div>
          <div className="mb-[60px]">
            <Container>
              <Title>Все акции</Title>
            </Container>
          </div>
          <AllSalesList />
        </div>
      </Layout>
    </>
  );
};

export default AllSales;
