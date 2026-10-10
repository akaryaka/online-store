import Container from "@/widgets/container";
import Crumbs from "@/widgets/crumbs";
import Layout from "@app/layout";
import ShoppingCartTitle from "./ui/title/ShoppingCartTitle";
import ShoppingCartSidebar from "./ui/sidebar/ShoppingCartSidebar";
import ShoppingCartOrders from "./ui/orders/ShoppingCartOrders";
import ShoppingCartHeaderOrders from "./ui/headerOrders/ShoppingCartHeaderOrders";

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
