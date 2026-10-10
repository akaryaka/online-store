import Container from "@/widgets/container";
import Title from "@/shared/ui/title";
import Layout from "@app/layout";
import CategoryCrumbs from "./ui/crumbs/CategoryCrumbs";
import CategoryTags from "./ui/tags/CategoryTags";
import CategorySidebar from "./ui/sidebar/CategorySidebar";
import CategoryCardList from "./ui/cardList/CategoryCardList";

const Category = () => {
  return (
    <>
      <Layout title="Каталог | Молоко, сыр, яйцо">
        <div className="pt-[24px] pb-[80px]">
          <div className="mb-[27px]">
            <Container>
              <CategoryCrumbs />
            </Container>
          </div>
          <div>
            <Container>
              <Title className="mb-[60px]">Молоко, сыр, яйцо</Title>
              <CategoryTags />
              <div className="flex gap-[40px] justify-between">
                <CategorySidebar />
                <CategoryCardList />
              </div>
            </Container>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Category;
