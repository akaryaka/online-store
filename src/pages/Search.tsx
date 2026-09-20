import Card from "@/components/card/Card";
import Container from "@/components/container/Container";

const Search = () => {
  return (
    <>
      <div className="p-[80px_0px]">
        <Container>
          <header>
            <h2 className="text-[36px] mb-[24px] font-bold">
              Результат поиска
            </h2>
          </header>
          <div className="text-[24px] leading-[150%] text-[#414141] mb-[40px]">
            по запросу <span className="text-[#FF6633]">Еда</span>
          </div>
          <div className="grid grid-cols-4 gap-[40px]">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Search;
