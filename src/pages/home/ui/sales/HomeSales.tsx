import product1 from "@images/product1.png";
import product2 from "@images/product2.png";
import product3 from "@images/product3.png";
import product4 from "@images/product4.png";
import Card from "@/widgets/card/Card";
import Title from "@/shared/ui/title";
import LinkHome from "../link/LinkHome";

const salesCards = [
  {
    id: 1,
    price: "50,50",
    priceSales: "44,50",
    title: "Г/Ц Блинчики с мясом вес, Россия",
    img: product1,
    rating: 2,
    favorites: false,
  },
  {
    id: 2,
    img: product2,
    price: "50,50",
    priceSales: "44,50",
    title: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
    rating: 3,
    favorites: false,
  },
  {
    id: 3,
    price: "50,50",
    priceSales: "44,50",
    title: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    img: product3,
    rating: 5,
    favorites: false,
  },
  {
    id: 4,
    price: "50,50",
    priceSales: "44,50",
    title: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    img: product4,
    rating: 4,
    favorites: false,
  },
];

const HomeSales = () => {
  return (
    <>
      <div className="ml-[auto] mr-[auto]">
        <header className="flex justify-between items-center mb-[40px] pr-[7px] max-[1300px]:mb-[32px]">
          <Title size="m">Акции</Title>
          <LinkHome title="Все акции" path="/allsales" />
        </header>
        <div className="grid gap-[40px] grid-cols-4 max-[1300px]:grid-cols-3 max-[1300px]:gap-[32px] max-[991px]:grid-cols-2 max-[991px]:gap-[40px] max-[767px]:grid-cols-1">
          {salesCards.map((card) => {
            return (
              <Card
                type="sale"
                key={card.id}
                price={card.price}
                priceSales={card.priceSales}
                title={card.title}
                img={card.img}
                rating={card.rating}
                favorites={card.favorites}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeSales;
