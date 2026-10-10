import { Link } from "react-router";
import ArrowIcon from "@/widgets/icons/ArrowIcon";
import Card from "@/widgets/card/Card";
import product2 from "@images/product2.png";
import product4 from "@images/product4.png";
import product5 from "@images/product5.png";
import product6 from "@images/product6.png";

const boughtBefore = [
  {
    id: 1,
    price: "77,99",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    img: product6,
    rating: 2,
    favorites: false,
  },
  {
    id: 2,
    img: product4,
    price: "159,99",
    title: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    rating: 2,
    favorites: false,
  },
  {
    id: 3,
    price: "599,99",
    title: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    img: product5,
    rating: 2,
    favorites: false,
  },
  {
    id: 4,
    price: "49,39",
    title: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
    img: product2,
    rating: 2,
    favorites: false,
  },
];

const HomeBoughtBefore = () => {
  return (
    <>
      <div className="pt-[80px] mb-[120px] ml-[auto] mr-[auto]">
        <header className="flex justify-between items-center mb-[60px]">
          <h2 className="text-[36px] font-bold">Покупали раньше</h2>
          <Link className="flex gap-[29px]" to="/allboughtbefore">
            <span>Все покупки</span>
            <ArrowIcon />
          </Link>
        </header>
        <div className="grid gap-[40px] grid-cols-4">
          {boughtBefore.map((card) => {
            return (
              <Card
                price={card.price}
                img={card.img}
                favorites={card.favorites}
                rating={card.rating}
                key={card.id}
                title={card.title}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeBoughtBefore;
