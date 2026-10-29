import Container from "@/widgets/container";
import Layout from "@app/layout";
import HomeBanner from "./ui/banner/HomeBanner";
import HomeSales from "./ui/sales/HomeSales";
import HomeNewProducts from "./ui/newProducts/HomeNewProducts";
import HomeBoughtBefore from "./ui/bought/HomeBoughtBefore";
import HomeSprecialOffers from "./ui/specialOffers/HomeSprecialOffers";
import HomeOurStores from "./ui/ourStores/HomeOurStores";
import HomeArticles from "./ui/articles/HomeArticles";

const Home = () => {
  return (
    <>
      <Layout title="Главная">
        <HomeBanner />
        <div className="pt-[84px] pb-[80px] max-[1300px]:pt-[64px] max-[1300px]:pb-[60px] max-[767px]:pt-[30px] max-[767px]:pb-[30px]">
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
