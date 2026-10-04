import Container from "@/widgets/container/Container";
import AboutItem from "./AboutItem";

const itemsList = [
  { id: 1, title: "Мы занимаемся розничной торговлей", desc: "Более 20 лет." },
  {
    id: 2,
    title: "Основная миссия компании",
    desc: " Максимальное качество товаров и услуг по доступной цене.",
  },
  {
    id: 3,
    title: " Отличительная черта нашей сети",
    desc: "Здоровая и полезная продукция местного производства в наших магазинах.",
  },
];

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
