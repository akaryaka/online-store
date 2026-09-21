import Button from "../button/Button";
import Favorites from "../favorites/Favorites";
import Sales from "../sales/Sales";
import Stars from "../stars/Stars";
import type { Props } from "./Card.props";

const Card = ({ img, rating }: Props) => {
  return (
    <>
      <div className="hover:shadow-[4px_8px_16px_rgba(255,102,51,0.2)] hover:translate-y-[-5px] transition-all cursor-pointer rounded-[10px] bg-[#fff]">
        <header className="relative">
          <img src={img} alt="cacke" />
          <Sales className="absolute bottom-[10px] left-[10px]">-50%</Sales>
          <Favorites status={true} className="absolute top-[8px] right-[8px]" />
        </header>
        <div className="p-[8px]">
          <div className="flex justify-between pt-[8px] mb-[8px]">
            <div>
              <div className="text-[#414141] flex gap-[4px] text-[18px] font-bold">
                <span>44,50</span>
                <span>₽</span>
              </div>
              <div>С картой</div>
            </div>
            <div>
              <div className="text-right">
                <span>50,50</span>
                <span>₽</span>
              </div>
              <div>Обычная</div>
            </div>
          </div>
          <h3 className="mb-[8px]">Г/Ц Блинчики с мясом вес, Россия</h3>
          <Stars className="mb-[8px]" rating={rating} />
          <Button>В корзину</Button>
        </div>
      </div>
    </>
  );
};

export default Card;
