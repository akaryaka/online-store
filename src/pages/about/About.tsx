import Container from "@/widgets/container/Container";
import Crumbs from "@/widgets/crumbs/Crumbs";
import Layout from "@app/layout/Layout";
import AboutHeader from "./header/AboutHeader";
import AboutItems from "./items/AboutItems";
import AboutFooter from "./footer/AboutFooter";

const About = () => {
  return (
    <>
      <Layout title="О компании">
        <div className="pt-[24px] pb-[80px]">
          <Container>
            <Crumbs page="О компании" />
          </Container>
          <AboutHeader />
          <AboutItems />
          <AboutFooter />
        </div>
      </Layout>
    </>
  );
};

export default About;
