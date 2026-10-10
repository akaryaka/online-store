import Container from "@/widgets/container/Container";
import { articles } from "./models/articles";

const AllArticlesList = () => {
  return (
    <>
      <div>
        <Container>
          <div className="grid grid-cols-3 grid-rows-2 gap-[40px]">
            {articles.map((article) => {
              return (
                <div
                  key={article.id}
                  className="flex flex-col w-[376px] h-[420px] bg-[#fff] rounded-[4px] cursor-pointer hover:shadow-[4px_8px_16px_rgba(255,102,51,0.2)] transition-all"
                >
                  <img
                    className="rounded-tl-[4px] h-[162px] rounded-tr-[4px]"
                    src={article.img}
                    alt="article-image"
                  />
                  <div className="flex grow flex-col p-[10px]">
                    <div className="text-[12px] leading-[150%] text-[#8F8F8F] mb-[10px]">
                      {article.date}
                    </div>
                    <div className="text-[18px] leading-[150%] text-[#414141] font-bold mb-[10px]">
                      {article.title}
                    </div>
                    <div className="text-[16px] leading-[150%] text-[#414141]">
                      {article.desc}
                    </div>
                    <button className="w-[150px] mt-[auto] p-[8px_16px] rounded-[4px] bg-[#E5FFDE] text-[16px] leading-[150%] text-[#70C05B] cursor-pointer transition-all hover:bg-[#70C05B] hover:text-[#fff]">
                      Подробнее
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
};

export default AllArticlesList;
