import article1 from "@images/article1.png";
import article2 from "@images/article2.png";
import article3 from "@images/article3.png";
import ArrowIcon from "@/widgets/icons/ArrowIcon";
import { Link } from "react-router";

const articles = [
  {
    id: 1,
    img: article1,
    date: "05.03.2021",
    title: "Режим использования масок и перчаток на территории магазинов",
    desc: "Подробная информация о режимах использования масок и перчаток на территории магазинов 'ЛЕНТА'. Информация обновляется каждыйбудний день.",
  },
  {
    id: 2,
    img: article2,
    date: "05.03.2021",
    title: "Весеннее настроение для каждой",
    desc: "8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.",
  },
  {
    id: 3,
    img: article3,
    date: "22.02.2020",
    title: "ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!",
    desc: "Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!",
  },
];

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
                  <button className="w-[150px] mt-[auto] p-[8px_16px] rounded-[4px] bg-[#E5FFDE] text-[16px] leading-[150%] text-[#70C05B] cursor-pointer transition-all hover:bg-[#70C05B] hover:text-[#fff]">
                    Подробнее
                  </button>
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
