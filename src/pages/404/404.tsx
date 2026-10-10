import Container from "@/widgets/container/Container";
import Title from "@/shared/ui/title/Title";
import Layout from "@app/layout";

const Page_404 = () => {
  return (
    <>
      <Layout title="Ошибка!">
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
