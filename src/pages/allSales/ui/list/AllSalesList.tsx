import Container from "@/widgets/container/Container";
import CardSale from "@/widgets/card/CardSale";
import { salesCards } from "./models/salesCards";

const AllSalesList = () => {
  return (
    <>
      <div>
        <Container>
          <div className="grid gap-[40px] grid-cols-4">
            {salesCards.map((card) => {
              return (
                <CardSale
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
        </Container>
      </div>
    </>
  );
};

export default AllSalesList;
