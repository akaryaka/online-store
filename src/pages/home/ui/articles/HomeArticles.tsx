import ArrowIcon from "@/widgets/icons/ArrowIcon";
import { Link } from "react-router";
import Button from "@/shared/ui/button";
import { articles } from "./models/articles";

const HomeArticles = () => {
  return (
    <>
      <div>
        <header className="flex justify-between items-center mb-[60px]">
          <h2 className="text-[36px] font-bold">Статьи</h2>
          <Link className="flex gap-[29px]" to="/allarticles">
            <span>Все статьи</span>
            <ArrowIcon />
          </Link>
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
                  <Button
                    type="text-btn"
                    accent="secondaryDisabled"
                    className="w-[150px] justify-center mt-[auto] p-[8px_16px] text-[16px] leading-[150%]"
                  >
                    Подробнее
                  </Button>
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
