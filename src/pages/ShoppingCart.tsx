import Container from "@/components/container/Container";
import { Helmet } from "react-helmet-async";

const ShoppingCart = () => {
  return (
    <>
      <Helmet>
        <title>Корзина</title>
      </Helmet>
      <Container>
        <h1>ShoppingCart</h1>
      </Container>
    </>
  );
};

export default ShoppingCart;
