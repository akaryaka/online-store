import product2 from "@images/product2.png";
import product3 from "@images/product3.png";
import product4 from "@images/product4.png";
import product5 from "@images/product5.png";
import Card from "@/widgets/card/Card";
import Title from "@/shared/ui/title";
import LinkHome from "../link/LinkHome";

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
      <div className="pt-[80px] max-[767px]:pt-[40px] ml-[auto] mr-[auto]">
        <header className="flex justify-between items-center mb-[60px] max-[1300px]:mb-[32px]">
          <Title size="m">Новинки</Title>
          <LinkHome title="Все новинки" path="/allnewproducts" />
        </header>
        <div className="grid gap-[40px] grid-cols-4 max-[1300px]:grid-cols-3 max-[991px]:grid-cols-2 max-[991px]:gap-[40px] max-[767px]:grid-cols-1">
          {newProducts.map((card) => {
            return (
              <Card
                type="product"
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
