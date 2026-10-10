import Container from "@/widgets/container/Container";
import Crumbs from "@/widgets/crumbs";
import Title from "@/shared/ui/title";
import CatalogItem from "./ui/item/CatalogItem";
import Layout from "@app/layout";
import { catalogList } from "./model/catalogList";

const Catalog = () => {
  return (
    <>
      <Layout title="Каталог">
        <div className="pt-[24px] pb-[80px]">
          <Container>
            <Crumbs page="Каталог" />
          </Container>
        </div>
        <div className="pb-[80px]">
          <Container>
            <Title className="mb-[60px]">Каталог</Title>
            <div className="grid grid-cols-4 grid-rows-4 gap-[40px]">
              {catalogList.map((item) => {
                return (
                  <CatalogItem
                    key={item.id}
                    link={item.link}
                    img={item.img}
                    size={item.size}
                    title={item.title}
                  />
                );
              })}
            </div>
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default Catalog;
