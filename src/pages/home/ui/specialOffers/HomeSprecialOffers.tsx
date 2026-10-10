import loyalCardIcon from "@images/loyalty-card.png";
import loyalCardIcon2 from "@images/loyalty-card2.png";

const HomeSprecialOffers = () => {
  return (
    <>
      <div className="mb-[120px]">
        <h2 className="text-[36px] font-bold mb-[40px]">
          Специальные предложения
        </h2>
        <div className="flex justify-between gap-[40px]">
          <div className="flex items-center h-[200px] rounded-[4px] pl-[40px] pt-[18px] pb-[19px] pr-[31px] w-50% bg-[#FCD5BA] transition-all cursor-pointer hover:shadow-[0px_8px_16px_rgba(202,147,96,0.5)]">
            <div className="w-[258px] mr-[21px]">
              <h3 className="text-[24px] leading-[150%] text-[#414141] font-bold mb-[6px]">
                Оформите карту «Северяночка»
              </h3>
              <p className="text-[16px] leading-[150%] text-[#414141]">
                И получайте бонусы при покупке в магазинах и на сайте
              </p>
            </div>
            <div>
              <img
                className="rotate-[14deg] hover:shadow-[0px_8px_47px_rgba(200,90,53,0.51)] transition-all"
                src={loyalCardIcon}
                alt="card-icon"
              />
            </div>
          </div>
          <div className="flex items-center h-[200px] rounded-[4px] pl-[40px] pt-[18px] pb-[19px] pr-[31px] w-50% bg-[#E5FFDE] transition-all cursor-pointer hover:shadow-[4px_8px_16px_rgba(112,192,91,0.2)]">
            <div className="w-[258px] mr-[21px]">
              <h3 className="text-[24px] leading-[150%] text-[#414141] font-bold mb-[6px]">
                Покупайте акционные товары
              </h3>
              <p className="text-[16px] leading-[150%] text-[#414141]">
                И получайте вдвое больше бонусов
              </p>
            </div>
            <div>
              <img src={loyalCardIcon2} alt="card-icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSprecialOffers;
