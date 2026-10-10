import Container from "@/widgets/container";
import Card from "@/widgets/card/Card";
import { newProducts } from "./models/newProducts";

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
