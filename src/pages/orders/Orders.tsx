import Container from "@/widgets/container";
import Crumbs from "@/widgets/crumbs";
import Title from "@/shared/ui/title";
import Layout from "@app/layout";
import OrdersList from "./ui/list/OrdersList";

const Orders = () => {
  return (
    <>
      <Layout title="Заказы">
        <div className="pt-[24px] pb-[80px]">
          <Container>
            <div className="mb-[24px]">
              <Crumbs page="Заказы" />
            </div>
            <Title className="mb-[60px]">Заказы</Title>
            <OrdersList />
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default Orders;
