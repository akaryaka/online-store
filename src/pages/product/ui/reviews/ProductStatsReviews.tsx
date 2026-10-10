import Stars from "@/widgets/icons/stars/Stars";

const ProductStatsReviews = () => {
  return (
    <>
      <div className="w-[168px] mr-[144px]">
        <header className="flex justify-between items-center mb-[16px]">
          <Stars rating={4} />
          <div className="text-[18px] text-[#414141] font-bold leading-[150%]">
            4 из 5
          </div>
        </header>
        <div className="w-[100%]">
          <div className="flex justify-between items-center gap-[16px] mb-[8px]">
            <div className="text-[16px] leading-[150%] text-[#414141]">5</div>
            <Stars rating={5} />
            <div className="text-[16px] leading-[150%] text-[#414141]">1</div>
          </div>
          <div className="flex justify-between items-center gap-[16px] mb-[8px]">
            <div className="text-[16px] leading-[150%] text-[#414141]">4</div>
            <Stars rating={4} />
            <div className="text-[16px] leading-[150%] text-[#414141]">1</div>
          </div>
          <div className="flex justify-between items-center gap-[16px] mb-[8px]">
            <div className="text-[16px] leading-[150%] text-[#414141]">3</div>
            <Stars rating={3} />
            <div className="text-[16px] leading-[150%] text-[#414141]">1</div>
          </div>
          <div className="flex justify-between items-center gap-[16px] mb-[8px]">
            <div className="text-[16px] leading-[150%] text-[#414141]">2</div>
            <Stars rating={2} />
            <div className="text-[16px] leading-[150%] text-[#414141]">1</div>
          </div>
          <div className="flex justify-between items-center gap-[16px] mb-[8px]">
            <div className="text-[16px] leading-[150%] text-[#414141]">1</div>
            <Stars rating={1} />
            <div className="text-[16px] leading-[150%] text-[#414141]">1</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductStatsReviews;
