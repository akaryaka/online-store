import Container from "@/widgets/container/Container";
import Layout from "@app/layout/Layout";
import HomeBanner from "./banner/HomeBanner";
import HomeSales from "./sales/HomeSales";
import HomeNewProducts from "./newProducts/HomeNewProducts";
import HomeBoughtBefore from "./bought/HomeBoughtBefore";
import HomeSprecialOffers from "./specialOffers/HomeSprecialOffers";
import HomeOurStores from "./ourStores/HomeOurStores";
import HomeArticles from "./articles/HomeArticles";

const Home = () => {
  return (
    <>
      <Layout title="Главная">
        <HomeBanner />
        <div className="pt-[84px] pb-[80px]">
          <Container>
            <HomeSales />
            <HomeNewProducts />
            <HomeBoughtBefore />
            <HomeSprecialOffers />
            <HomeOurStores />
            <HomeArticles />
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default Home;
