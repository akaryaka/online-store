import Layout from "@/app/layout";
import Title from "@/shared/ui/title";
import Container from "@/widgets/container";
import Crumbs from "@/widgets/crumbs";
import AllArticlesList from "./list/AllArticlesList";

const AllArticles = () => {
  return (
    <>
      <Layout title="Все статьи">
        <div className="pt-[24px] pb-[80px]">
          <div className="mb-[27px]">
            <Container>
              <Crumbs page="Все статьи" />
            </Container>
          </div>
          <div className="mb-[60px]">
            <Container>
              <Title>Все статьи</Title>
            </Container>
          </div>
          <AllArticlesList />
        </div>
      </Layout>
    </>
  );
};

export default AllArticles;
