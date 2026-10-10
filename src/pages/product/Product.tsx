import Layout from "@/app/layout";
import Container from "@/widgets/container";
import ProductSales from "./ui/sales/ProductSales";
import ProductStatsReviews from "./ui/reviews/ProductStatsReviews";
import ProductCrumbs from "./ui/crumbs/ProductCrumbs";
import ProductReviewsList from "./ui/reviews/ProductReviewsList";
import ProductInfo from "./ui/info/ProductInfo";
import ProductPurchases from "./ui/purchases/ProductPurchases";

const Product = () => {
  return (
    <>
      <Layout title="Товар">
        <div className="pt-[24px] pb-[80px]">
          <Container>
            <div className="mb-[24px]">
              <ProductCrumbs />
            </div>
            <ProductInfo />
            <ProductPurchases />
            <div className="reviews mb-[120px]">
              <header className="flex justify-between items-center mb-[40px] pr-[7px]">
                <h2 className="text-[36px] font-bold">Отзывы</h2>
              </header>
              <div className="flex">
                <ProductStatsReviews />
                <ProductReviewsList />
              </div>
            </div>
            <ProductSales />
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default Product;
