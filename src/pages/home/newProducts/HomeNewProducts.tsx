import { Link } from "react-router";
import ArrowIcon from "@/widgets/icons/ArrowIcon";
import product2 from "@images/product2.png";
import product3 from "@images/product3.png";
import product4 from "@images/product4.png";
import product5 from "@images/product5.png";
import Card from "@/widgets/card/Card";

const newProducts = [
  {
    id: 1,
    price: "599,99",
    title: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    img: product5,
    rating: 2,
    favorites: false,
  },
  {
    id: 2,
    img: product3,
    price: "44,50",
    title: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    rating: 5,
    favorites: false,
  },
  {
    id: 3,
    price: "159,99",
    title: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    img: product4,
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

const HomeNewProducts = () => {
  return (
    <>
      <div className="pt-[80px] ml-[auto] mr-[auto]">
        <header className="flex justify-between items-center mb-[60px]">
          <h2 className="text-[36px] font-bold">Новинки</h2>
          <Link className="flex gap-[29px]" to="/allnewproducts">
            <span>Все новинки</span>
            <ArrowIcon />
          </Link>
        </header>
        <div className="grid gap-[40px] grid-cols-4">
          {newProducts.map((card) => {
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

export default HomeNewProducts;
