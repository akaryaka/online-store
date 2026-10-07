import Layout from "@/app/layout/Layout";
import Container from "@/widgets/container/Container";
import Crumbs from "@/widgets/crumbs/Crumbs";
import Title from "@/shared/ui/title/Title";
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
