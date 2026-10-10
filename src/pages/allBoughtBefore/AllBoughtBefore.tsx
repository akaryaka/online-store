import Layout from "@/app/layout";
import Container from "@/widgets/container";
import Crumbs from "@/widgets/crumbs";
import Title from "@/shared/ui/title";
import AllBoughtBeforeList from "./list/AllBoughtBeforeList";

const AllBoughtBefore = () => {
  return (
    <>
      <Layout title="Все покупки">
        <div className="pt-[24px] pb-[80px]">
          <div className="mb-[27px]">
            <Container>
              <Crumbs page="Все покупки" />
            </Container>
          </div>
          <div className="mb-[60px]">
            <Container>
              <Title>Все покупки</Title>
            </Container>
          </div>
          <AllBoughtBeforeList />
        </div>
      </Layout>
    </>
  );
};

export default AllBoughtBefore;
