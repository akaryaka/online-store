import Container from "@/components/container/Container";
import Crumbs from "@/components/crumbs/Crumbs";
import Title from "@/components/title/Title";
import catalogBg1 from "@images/catalog/catalog1.png";
import cn from "classnames";
import { Helmet } from "react-helmet-async";

interface Props {
  title: string;
  size?: "col-span-2" | "";
}

const CatalogItem = ({ title, size, ...props }: Props) => {
  return (
    <>
      <div
        className={cn(
          "h-[200px] bg-[green] rounded-[4px]  relative cursor-pointer",
          size,
          { ...props },
        )}
        style={{ backgroundImage: `url(${catalogBg1})` }}
      >
        <h2 className="text-[#fff] h-[117px] p-[10px] flex items-end bg-[linear-gradient(180deg,rgba(112,192,91,0)_0%,#70C05B_82.81%)] hover:bg-[linear-gradient(180deg,rgba(255,102,51,0)_0%,#FF6633_100%)] hover:h-[177px] transition-all absolute left-[0px] bottom-[0px] w-[100%] text-[18px] leading-[150%] font-bold">
          {title}
        </h2>
      </div>
    </>
  );
};

const Catalog = () => {
  return (
    <>
      <Helmet>
        <title>Каталог</title>
      </Helmet>
      <div className="pt-[24px] pb-[80px]">
        <Container>
          <Crumbs page="Каталог" />
        </Container>
      </div>
      <div className="pb-[80px]">
        <Container>
          <Title className="mb-[60px]">Каталог</Title>
          <div className="grid grid-cols-4 grid-rows-4 gap-[40px]">
            <CatalogItem title="Молоко, сыр, яйцо" size="col-span-2" />
            <CatalogItem title="Молоко, сыр, яйцо" />
            <CatalogItem title="Молоко, сыр, яйцо" />
            <CatalogItem title="Молоко, сыр, яйцо" />
            <CatalogItem title="Молоко, сыр, яйцо" />
            <CatalogItem title="Молоко, сыр, яйцо" />
            <CatalogItem title="Молоко, сыр, яйцо" />
            <CatalogItem title="Молоко, сыр, яйцо" />
            <CatalogItem title="Молоко, сыр, яйцо" />
            <CatalogItem title="Молоко, сыр, яйцо" size="col-span-2" />
            <CatalogItem title="Молоко, сыр, яйцо" />
            <CatalogItem title="Молоко, сыр, яйцо" size="col-span-2" />
            <CatalogItem title="Молоко, сыр, яйцо" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Catalog;
