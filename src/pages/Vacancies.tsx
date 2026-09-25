import Container from "@/components/container/Container";
import Crumbs from "@/components/crumbs/Crumbs";
import Title from "@/components/title/Title";
import PhoneIcon from "@/components/icons/PhoneIcon";
import { Helmet } from "react-helmet-async";

interface Props {
  job: string;
  requirements: string;
  responsibilities: string;
  conditions: string;
}

const VacanciesItem = ({
  job,
  requirements,
  responsibilities,
  conditions,
}: Props) => {
  return (
    <>
      <div className="p-[32px] rounded-[4px] bg-[#fff] shadow-[1px_2px_2px_rgba(0,0,0,0.1)]">
        <h2 className="text-[24px] leading-[150%] text-[#414141] mb-[16px] font-bold">
          {job}
        </h2>
        <div className="mb-[16px] text-[#414141]">
          <h3 className="mb-[8px]">Требования</h3>
          <p>{requirements}</p>
        </div>
        <div className="mb-[16px] text-[#414141]">
          <h3 className="mb-[8px]">Обязанности</h3>
          <p>{responsibilities}</p>
        </div>
        <div className="mb-[16px] text-[#414141]">
          <h3 className="mb-[8px]">Условия</h3>
          <p>{conditions}</p>
        </div>
        <h3 className="mb-[8px] text-[#414141]">Звоните</h3>
        <div className="flex items-center gap-[8px]">
          <PhoneIcon />
          <a
            className="text-[18px] leading-[150%] text-[#414141] underline"
            href="tel:+7 904 271 35 90"
          >
            +7 904 271 35 90
          </a>
        </div>
      </div>
    </>
  );
};

const Vacancies = () => {
  return (
    <>
      <Helmet>
        <title>Вакансии</title>
      </Helmet>
      <>
        <div className="pt-[24px] pb-[80px]">
          <Container>
            <div className="mb-[24px]">
              <Crumbs page="Вакансии" />
            </div>
            <Title className="mb-[60px]">Вакансии</Title>
            <div className="grid grid-cols-3 gap-[40px]">
              <VacanciesItem
                job="Должность"
                requirements="Текст про требования текст про требования текст про требования
                  текст про требования текст про требования"
                responsibilities="Текст про обязаности текст про обязаности текст про обязаности
                  текст про обязаности текст про обязаности"
                conditions="Текст про условия текст про условия текст про условия текст
                  про условия текст про условия текст про условия"
              />
              <VacanciesItem
                job="Должность"
                requirements="Текст про требования текст про требования текст про требования
                  текст про требования текст про требования"
                responsibilities="Текст про обязаности текст про обязаности текст про обязаности
                  текст про обязаности текст про обязаности"
                conditions="Текст про условия текст про условия текст про условия текст
                  про условия текст про условия текст про условия"
              />
              <VacanciesItem
                job="Должность"
                requirements="Текст про требования текст про требования текст про требования
                  текст про требования текст про требования"
                responsibilities="Текст про обязаности текст про обязаности текст про обязаности
                  текст про обязаности текст про обязаности"
                conditions="Текст про условия текст про условия текст про условия текст
                  про условия текст про условия текст про условия"
              />
              <VacanciesItem
                job="Должность"
                requirements="Текст про требования текст про требования текст про требования
                  текст про требования текст про требования"
                responsibilities="Текст про обязаности текст про обязаности текст про обязаности
                  текст про обязаности текст про обязаности"
                conditions="Текст про условия текст про условия текст про условия текст
                  про условия текст про условия текст про условия"
              />
              <VacanciesItem
                job="Должность"
                requirements="Текст про требования текст про требования текст про требования
                  текст про требования текст про требования"
                responsibilities="Текст про обязаности текст про обязаности текст про обязаности
                  текст про обязаности текст про обязаности"
                conditions="Текст про условия текст про условия текст про условия текст
                  про условия текст про условия текст про условия"
              />
              <VacanciesItem
                job="Должность"
                requirements="Текст про требования текст про требования текст про требования
                  текст про требования текст про требования"
                responsibilities="Текст про обязаности текст про обязаности текст про обязаности
                  текст про обязаности текст про обязаности"
                conditions="Текст про условия текст про условия текст про условия текст
                  про условия текст про условия текст про условия"
              />
            </div>
          </Container>
        </div>
      </>
    </>
  );
};

export default Vacancies;
