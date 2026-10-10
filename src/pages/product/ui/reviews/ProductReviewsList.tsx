import UserAccount from "@/shared/ui/userAccount/UserAccount";
import Stars from "@/widgets/icons/stars/Stars";
import Button from "@/shared/ui/button/Button";

const ProductReviewsList = () => {
  return (
    <>
      <div className="w-[688px]">
        <div className="message mb-[40px]">
          <div className="mb-[8px]">
            <UserAccount name="Татьяна" />
          </div>
          <div className="flex items-center gap-[16px] mb-[9px]">
            <Stars rating={5} />
            <div className="text-[#8F8F8F] text-[12px] leading-[150%]">
              22.02.2020
            </div>
          </div>
          <div className="text-[#414141]">приятный вкус</div>
        </div>
        <div className="message mb-[40px]">
          <div className="mb-[8px]">
            <UserAccount name="Мария" />
          </div>
          <div className="flex items-center gap-[16px] mb-[9px]">
            <Stars rating={4} />
            <div className="text-[#8F8F8F] text-[12px] leading-[150%]">
              22.02.2020
            </div>
          </div>
          <div className="text-[#414141]">Масло среднее, есть вкуснее</div>
        </div>
        <div className="message mb-[40px]">
          <div className="mb-[8px]">
            <UserAccount name="Алексей" />
          </div>
          <div className="flex items-center gap-[16px] mb-[9px]">
            <Stars rating={1} />
            <div className="text-[#8F8F8F] text-[12px] leading-[150%]">
              22.02.2020
            </div>
          </div>
          <div className="text-[#414141]">
            Покупали в том числе в этом весе. Масло по вкусу и органолептическим
            свойствам совершенно не похоже на натуральное. Упаковка выглядит как
            напечатанная на дешёвом принтере. На наш взгляд продукт является
            подделкой или контрафактной продукцией. Просим разобраться.
          </div>
        </div>
        <div>
          <header className="flex items-center gap-[16px] mb-[19px]">
            <div className="font-bold text-[18px] leading-[150%] text-[#414141]">
              Ваша оценка
            </div>
            <div>
              <Stars rating={0} />
            </div>
          </header>
          <textarea
            className="border border-[#BFBFBF] w-[100%] bg-[#fff] p-[8px_16px] rounded-[4px] mb-[16px]"
            name=""
            id=""
          >
            sd
          </textarea>
          <Button
            accent="primaryDisabled"
            type="text-btn"
            className="w-[188px] justify-center p-[8px]"
          >
            Отправить отзыв
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductReviewsList;
