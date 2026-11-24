import Container from "@/widgets/container";
import Layout from "@app/layout";
import HomeBanner from "./ui/banner/HomeBanner";
import HomeSales from "./ui/sales/HomeSales";
import HomeNewProducts from "./ui/newProducts/HomeNewProducts";
import HomeBoughtBefore from "./ui/bought/HomeBoughtBefore";
import HomeSprecialOffers from "./ui/specialOffers/HomeSprecialOffers";
import HomeOurStores from "./ui/ourStores/HomeOurStores";
import HomeArticles from "./ui/articles/HomeArticles";
import bannerBg2 from "@images/banner-bg2.png";
import bannerContent2 from "@images/banner-2-content.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";

const slides = [
  { id: 1, component: <HomeBanner /> },
  {
    id: 2,
    component: (
      <div style={{ position: "relative", width: "100%", height: "200px" }}>
        <img
          style={{ width: "100%", height: "100%" }}
          src={bannerBg2}
          alt="bannerBg2"
        />
        <img
          style={{
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translate(-50%, 0)",
          }}
          src={bannerContent2}
          alt="banner-2-content"
        />
      </div>
    ),
  },
];

// const styles = {
//   slide: {
//     height: "100%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// };

const Home = () => {
  return (
    <>
      <Layout title="Главная">
        {/* <HomeBanner /> */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{
            delay: 6500,
            disableOnInteraction: false,
          }}
          // effect="fade"
          loop
          speed={2000} // обязательно укажите speed
          // fadeEffect={}
          style={{ width: "100%" }}
        >
          {slides.map((s) => (
            <SwiperSlide key={s.id}>
              <div>{s.component}</div>
            </SwiperSlide>
          ))}
        </Swiper>
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
