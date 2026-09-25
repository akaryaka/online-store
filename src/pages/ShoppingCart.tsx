import Container from "@/components/container/Container";
import Crumbs from "@/components/crumbs/Crumbs";
import Title from "@/components/title/Title";
import { Helmet } from "react-helmet-async";

const ShoppingCart = () => {
  return (
    <>
      <Helmet>
        <title>Корзина</title>
      </Helmet>
      <div className="pt-[24px] pb-[80px]">
        <Container>
          <div className="mb-[24px]">
            <Crumbs page="Корзина" />
          </div>
          <Title className="mb-[60px]">Корзина</Title>
        </Container>
      </div>
    </>
  );
};

export default ShoppingCart;
