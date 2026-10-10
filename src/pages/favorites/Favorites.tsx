import Container from "@/widgets/container/Container";
import Title from "@/shared/ui/title/Title";
import Crumbs from "@/widgets/crumbs/Crumbs";
import Layout from "@app/layout";
import FavoritesSidebar from "./sidebar/FavoritesSidebar";
import FavoritesContent from "./content/FavoritesContent";

const Favorites = () => {
  return (
    <>
      <Layout title="Избранное">
        <div className="pt-[24px] pb-[80px]">
          <div className="mb-[27px]">
            <Container>
              <Crumbs page="Избранное" />
            </Container>
          </div>
          <div>
            <Container>
              <Title className="mb-[60px]">Избранное</Title>
              <div className="flex gap-[40px] justify-between">
                <FavoritesSidebar />
                <FavoritesContent />
              </div>
            </Container>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Favorites;
