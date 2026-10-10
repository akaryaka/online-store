import Container from "@/widgets/container/Container";
import AboutItem from "./ui/AboutItem";
import { itemsList } from "./models/itemList";

const AboutItems = () => {
  return (
    <>
      <div className="mb-[120px]">
        <Container>
          <div className="grid grid-cols-[257px_355px_460px] gap-[75px]">
            {itemsList.map((item) => {
              return (
                <AboutItem key={item.id} title={item.title} desc={item.desc} />
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutItems;
