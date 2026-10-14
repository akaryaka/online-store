import Button from "@/shared/ui/button";
import { articles } from "./models/articles";
import Title from "@/shared/ui/title";
import LinkHome from "../link/LinkHome";
import { Link } from "react-router";

const HomeArticles = () => {
  return (
    <>
      <div>
        <header className="flex justify-between items-center mb-[60px]">
          <Title size="m">Статьи</Title>
          <LinkHome title="Все статьи" path="/allarticles" />
        </header>
        <div className="flex gap-[40px]">
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
                  <Link
                    target="_blank"
                    className="w-[150px] justify-center mt-[auto] p-[8px_16px] rounded-[4px] text-center bg-[#E5FFDE] text-[#70C05B] hover:bg-[#70C05B] hover:text-[#fff] hover:shadow-[4px_8px_16px_rgba(112,192,91,0.2)] active:shadow-[inset_0px_2px_0px_rgba(0,0,0,0.2)]"
                    to="/article"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeArticles;
