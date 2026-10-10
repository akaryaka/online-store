import Layout from "@/app/layout";
import Container from "@/widgets/container";
import Crumbs from "@/widgets/crumbs";
import Title from "@/shared/ui/title/";
import AllNewProductsList from "./list/AllNewProductsList";

const AllNewProducts = () => {
  return (
    <>
      <Layout title="Все новинки">
        <div className="pt-[24px] pb-[80px]">
          <div className="mb-[27px]">
            <Container>
              <Crumbs page="Все новинки" />
            </Container>
          </div>
          <div className="mb-[60px]">
            <Container>
              <Title>Все новинки</Title>
            </Container>
          </div>
          <AllNewProductsList />
        </div>
      </Layout>
    </>
  );
};

export default AllNewProducts;
