import Container from "@/widgets/container/Container";
import Title from "@/shared/ui/title/Title";
import Layout from "@app/layout";
import CategoryCrumbs from "./crumbs/CategoryCrumbs";
import CategoryTags from "./tags/CategoryTags";
import CategorySidebar from "./sidebar/CategorySidebar";
import CategoryCardList from "./cardList/CategoryCardList";

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
