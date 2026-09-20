import Container from "@/components/container/Container";
import Title from "@/components/title/Title";

const Page_404 = () => {
  return (
    <>
      <div className="pt-[24px] pb-[80px]">
        <Container>
          <div className="flex items-center justify-center h-[75vh]">
            <Title>Страница не найдена</Title>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page_404;
