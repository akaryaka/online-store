import Layout from "@/app/layout/Layout";
import Container from "@/widgets/container/Container";
import Crumbs from "@/widgets/crumbs/Crumbs";
import Title from "@/shared/ui/title/Title";
import AllArticlesList from "../allArticles/list/AllArticlesList";

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
          <AllArticlesList />
        </div>
      </Layout>
    </>
  );
};

export default AllNewProducts;
