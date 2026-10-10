import Title from "@/shared/ui/title/Title";

const ShoppingCartTitle = () => {
  return (
    <>
      <div className="relative inline-block">
        <Title className="mb-[60px]">
          <span>Корзина</span>
        </Title>
        <span className="absolute inline-flex items-start justify-start right-[-40px] top-[0] w-[26px] h-[32px] text-[#fff] bg-[#FF6633] text-[16px] font-normal p-[4px_8px] rounded-[4px]">
          <span>3</span>
        </span>
      </div>
    </>
  );
};

export default ShoppingCartTitle;
