import Phone from "@/shared/ui/phone/Phone";

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
        <Phone number="+7 904 271 35 90" />
      </div>
    </>
  );
};

export default VacanciesItem;
