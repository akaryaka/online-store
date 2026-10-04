import { Link } from "react-router";

const menu = [
  {
    id: 1,
    title: "О компании",
    link: "/about",
  },
  {
    id: 2,
    title: "Контакты",
    link: "/contacts",
  },
  {
    id: 3,
    title: "Вакансии",
    link: "/vacancies",
  },
  {
    id: 4,
    title: "Статьи",
    link: "/allarticles",
  },
];

const FooterMenu = () => {
  return (
    <>
      <ul className="flex gap-[40px]">
        {menu.map((item) => (
          <li key={item.id}>
            <Link className="hover:text-primary transition-all" to={item.link}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterMenu;
