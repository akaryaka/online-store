import Layout from "@/app/layout";
import BasicDatePicker from "@/shared/ui/lib/Calendar";
import CheckboxCustom from "@/shared/ui/lib/CheckboxCustom";
// import IconCheckboxes from "@/shared/ui/lib/Favorites";
import HalfRating from "@/shared/ui/lib/Rating";
import SelectCustom from "@/shared/ui/lib/SelectCustom";
import Text from "@/shared/ui/text";
import Title from "@/shared/ui/title";
import Container from "@/widgets/container";
import Crumbs from "@/widgets/crumbs";
import article1 from "@images/article1.png";

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
              <BasicDatePicker />
            </Container>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Article;
