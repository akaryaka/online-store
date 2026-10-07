import product2 from "@images/product2.png";
import product3 from "@images/product3.png";
import product4 from "@images/product4.png";
import product5 from "@images/product5.png";
import Container from "@/widgets/container/Container";
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
  {
    id: 5,
    price: "49,39",
    title: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
    img: product2,
    rating: 2,
    favorites: false,
  },
];

const AllNewProductsList = () => {
  return (
    <>
      <div>
        <Container>
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
        </Container>
      </div>
    </>
  );
};

export default AllNewProductsList;
