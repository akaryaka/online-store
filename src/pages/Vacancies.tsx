import Container from "@/components/container/Container";
import Crumbs from "@/components/crumbs/Crumbs";
import Title from "@/components/title/Title";

const Vacancies = () => {
  return (
    <>
      <div className="pt-[24px] pb-[80px]">
        <Container>
          <div className="mb-[24px]">
            <Crumbs page="Вакансии" />
          </div>

          <Title>Вакансии</Title>
        </Container>
      </div>
    </>
  );
};

export default Vacancies;
