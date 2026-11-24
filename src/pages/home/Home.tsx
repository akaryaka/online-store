import Container from "@/widgets/container";
import Layout from "@app/layout";
import HomeBanner from "./ui/banner/HomeBanner";
import HomeSales from "./ui/sales/HomeSales";
import HomeNewProducts from "./ui/newProducts/HomeNewProducts";
import HomeBoughtBefore from "./ui/bought/HomeBoughtBefore";
import HomeSprecialOffers from "./ui/specialOffers/HomeSprecialOffers";
import HomeOurStores from "./ui/ourStores/HomeOurStores";
import HomeArticles from "./ui/articles/HomeArticles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  { id: 1, title: "Скидка 50%", bg: "#ff6b6b" },
  { id: 2, title: "Новая коллекция", bg: "#4ecdc4" },
];

const styles = {
  slide: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const Home = () => {
  return (
    <>
      <Layout title="Главная">
        <HomeBanner />
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{
            delay: 1000,
            stopOnLastSlide: true,
            disableOnInteraction: true,
          }}
          effect="fade"
          loop
          fadeEffect={{ crossFade: true }}
          style={{ width: "100%", height: 300 }}
        >
          {slides.map((s) => (
            <SwiperSlide key={s.id}>
              <div style={{ ...styles.slide, background: s.bg }}>
                <h2 style={{ color: "#fff" }}>{s.title}</h2>
              </div>
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
