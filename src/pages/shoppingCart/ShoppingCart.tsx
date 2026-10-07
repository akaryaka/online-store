import Container from "@/widgets/container/Container";
import Crumbs from "@/widgets/crumbs/Crumbs";
import Layout from "@app/layout/Layout";
import ShoppingCartTitle from "./title/ShoppingCartTitle";
import ShoppingCartSidebar from "./sidebar/ShoppingCartSidebar";
import ShoppingCartOrders from "./orders/ShoppingCartOrders";
import ShoppingCartHeaderOrders from "./headerOrders/ShoppingCartHeaderOrders";

const ShoppingCart = () => {
  return (
    <>
      <Layout title="Корзина">
        <div className="pt-[24px] pb-[80px]">
          <Container>
            <div className="mb-[24px]">
              <Crumbs page="Корзина" />
            </div>
            <ShoppingCartTitle />
            <div className="flex gap-[60px]">
              <div className="grow">
                <ShoppingCartHeaderOrders />
                <ShoppingCartOrders />
              </div>
              <ShoppingCartSidebar />
            </div>
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default ShoppingCart;
