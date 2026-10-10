import Container from "@/widgets/container";
import Crumbs from "@/widgets/crumbs";
import Title from "@/shared/ui/title";
import Layout from "@app/layout";
import VacanciesItem from "./ui/VaconciesItem";
import { vacancies } from "./models/vacancies";

const Vacancies = () => {
  return (
    <>
      <Layout title="Вакансии">
        <div className="pt-[24px] pb-[80px]">
          <Container>
            <div className="mb-[24px]">
              <Crumbs page="Вакансии" />
            </div>
            <Title className="mb-[60px]">Вакансии</Title>
            <div className="grid grid-cols-3 gap-[40px]">
              {vacancies.map((vacancie) => {
                return (
                  <>
                    <VacanciesItem
                      key={vacancie.id}
                      job={vacancie.job}
                      requirements={vacancie.requirements}
                      conditions={vacancie.conditions}
                      responsibilities={vacancie.responsibilities}
                    />
                  </>
                );
              })}
            </div>
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default Vacancies;
