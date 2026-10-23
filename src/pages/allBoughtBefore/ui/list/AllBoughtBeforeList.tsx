import Container from "@/widgets/container/Container";
import Card from "@/widgets/card/Card";
import { list } from "@/entities/cards/list";

const AllBoughtBeforeList = () => {
  return (
    <>
      <div>
        <Container>
          <div className="grid gap-[40px] grid-cols-4 grid-rows-2">
            {list.map((card) => {
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
        </Container>
      </div>
    </>
  );
};

export default AllBoughtBeforeList;
