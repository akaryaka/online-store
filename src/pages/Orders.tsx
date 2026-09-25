import Container from "@/components/container/Container";
import { Helmet } from "react-helmet-async";

const Orders: any = () => {
  return (
    <>
      <Helmet>
        <title>Заказы</title>
      </Helmet>
      <Container>
        <h1>Orders</h1>
      </Container>
    </>
  );
};

export default Orders;
