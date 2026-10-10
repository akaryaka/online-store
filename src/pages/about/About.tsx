import Container from "@/widgets/container";
import Crumbs from "@/widgets/crumbs";
import Layout from "@app/layout";
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
