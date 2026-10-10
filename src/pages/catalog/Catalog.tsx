import Container from "@/widgets/container/Container";
import Crumbs from "@/widgets/crumbs/Crumbs";
import Title from "@/shared/ui/title/Title";
import CatalogItem from "./item/CatalogItem";
import Layout from "@app/layout";
import catalogBg1 from "@images/catalog/catalog1.png";
import catalogBg2 from "@images/catalog/catalog2.png";
import catalogBg3 from "@images/catalog/catalog3.png";
import catalogBg4 from "@images/catalog/catalog4.png";
import catalogBg5 from "@images/catalog/catalog5.png";
import catalogBg6 from "@images/catalog/catalog6.png";
import catalogBg7 from "@images/catalog/catalog7.png";
import catalogBg8 from "@images/catalog/catalog8.png";
import catalogBg9 from "@images/catalog/catalog9.png";
import catalogBg10 from "@images/catalog/catalog10.png";
import catalogBg11 from "@images/catalog/catalog11.png";
import catalogBg12 from "@images/catalog/catalog12.png";
import catalogBg13 from "@images/catalog/catalog13.png";

const catalogList = [
  {
    id: 1,
    title: "Молоко, сыр, яйцо",
    img: catalogBg1,
    link: "/catalog/category",
    size: "col-span-2",
  },
  {
    id: 2,
    title: "Хлеб",
    img: catalogBg2,
    link: "/catalog/category",
    size: "",
  },
  {
    id: 3,
    title: "Фрукты и овощи",
    img: catalogBg3,
    link: "/catalog/category",
    size: "",
  },
  {
    id: 4,
    title: "Замороженные продукты",
    img: catalogBg4,
    link: "/catalog/category",
    size: "",
  },
  {
    id: 5,
    title: "Напитки",
    img: catalogBg5,
    link: "/catalog/category",
    size: "",
  },
  {
    id: 6,
    title: "Кондитерские изделия",
    img: catalogBg6,
    link: "/catalog/category",
    size: "",
  },
  {
    id: 7,
    title: "Чай, кофе",
    img: catalogBg7,
    link: "/catalog/category",
    size: "",
  },
  {
    id: 8,
    title: "Бакалея",
    img: catalogBg8,
    link: "/catalog/category",
    size: "",
  },
  {
    id: 9,
    title: "Здоровое питание",
    img: catalogBg9,
    link: "/catalog/category",
    size: "",
  },
  {
    id: 10,
    title: "Зоотовары",
    img: catalogBg10,
    link: "/catalog/category",
    size: "col-span-2",
  },
  {
    id: 11,
    title: "Детское питание",
    img: catalogBg11,
    link: "/catalog/category",
    size: "",
  },
  {
    id: 12,
    title: "Мясо, птица, колбаса",
    img: catalogBg12,
    link: "/catalog/category",
    size: "col-span-2",
  },
  {
    id: 13,
    title: "Непродовольственные товары",
    img: catalogBg13,
    link: "/catalog/category",
    size: "",
  },
];

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
