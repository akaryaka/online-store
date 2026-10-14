import Layout from "@/app/layout";
import CheckboxCustom from "@/shared/ui/lib/CheckboxCustom";
import IconCheckboxes from "@/shared/ui/lib/Favorites";
import HalfRating from "@/shared/ui/lib/Rating";
import SelectCustom from "@/shared/ui/lib/SelectCustom";
import Text from "@/shared/ui/text";
import Title from "@/shared/ui/title";
import Container from "@/widgets/container";
import Crumbs from "@/widgets/crumbs";
import article1 from "@images/article1.png";
import article2 from "@images/article2.png";
import article3 from "@images/article3.png";

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
  {
    id: 4,
    img: article3,
    date: "22.02.2020",
    title: "ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!",
    desc: "Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!",
  },
  {
    id: 5,
    img: article3,
    date: "22.02.2020",
    title: "ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!",
    desc: "Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!",
  },
];

const Article = () => {
  return (
    <>
      <Layout title="Статья">
        <div className="pt-[24px] pb-[80px]">
          <Container>
            <Crumbs page="Статья" />
          </Container>
          <div>
            <Container>
              <Title className="mb-[10px]" size="m">
                ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!
              </Title>
              <div className="text-[12px] leading-[150%] text-[#8F8F8F] mb-[20px]">
                22.02.2020
              </div>
              <div className="mb-[40px] mr-[40px] w-[100%]">
                <img src={article1} className="w-[100%]" alt="article1" />
              </div>
              <div>
                <Text size="m">
                  Голосуйте за любимые категории, выбирайте категорию-победителя
                  в мобильном приложении и получайте кешбэк 10% баллами в
                  апреле!
                </Text>
              </div>
              <Text size="s">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                ullam, reiciendis repellendus aliquam maxime nemo nesciunt
                praesentium molestias voluptate in dolorum vitae aperiam
                consequuntur iure nulla nisi doloremque sapiente, dolor fuga
                optio expedita reprehenderit illum? Pariatur cupiditate nesciunt
                quae iusto non, sapiente saepe culpa, natus ut reprehenderit,
                totam officiis similique! Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Aut ullam, reiciendis repellendus
                aliquam maxime nemo nesciunt praesentium molestias voluptate in
                dolorum vitae aperiam consequuntur iure nulla nisi doloremque
                sapiente, dolor fuga optio expedita reprehenderit illum?
                Pariatur cupiditate nesciunt quae iusto non, sapiente saepe
                culpa, natus ut reprehenderit, totam officiis
                similique!consectetur adipisicing elit. Aut ullam, reiciendis
                repellendus aliquam maxime nemo nesciunt praesentium molestias
                voluptate in dolorum vitae aperiam consequuntur iure nulla nisi
                doloremque sapiente, dolor fuga optio expedita reprehenderit
                illum? Pariatur cupiditate nesciunt quae iusto non, sapiente
                saepe culpa, natus ut reprehenderit, totam officiis similique!
              </Text>
              <CheckboxCustom />
              <SelectCustom />
              <HalfRating />
              <IconCheckboxes />
            </Container>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Article;
