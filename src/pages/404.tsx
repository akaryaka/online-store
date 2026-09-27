import Container from "@/components/container/Container";
import Title from "@/components/title/Title";
import { Helmet } from "react-helmet-async";
import Layout from "./layout/Layout";

const Page_404 = () => {
  return (
    <>
      <Helmet>
        <title>Ошибка!</title>
      </Helmet>
      <Layout>
        <div className="pt-[24px] pb-[80px]">
          <Container>
            <div className="flex items-center justify-center h-[75vh]">
              <Title>Страница не найдена</Title>
            </div>
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default Page_404;
