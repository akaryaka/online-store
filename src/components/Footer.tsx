import { Link } from "react-router";
import logoFooter from "@images/logo-footer.png";
import bgFooter from "@images/bg-footer.png";
import Container from "./container/Container";
import VkIcon from "./icons/VkIcon";
import PhoneIcon from "./icons/PhoneIcon";
import OkIcon from "./icons/OkIcon";

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
  // удалить, для теста)
  {
    id: 5,
    title: "category",
    link: "/category",
  },
];

export function Footer() {
  return (
    <>
      <footer
        className="bg-[#F9F4E2] pt-[37px] pb-[37px] shadow-[2px_-4px_8px_rgba(0,0,0,0.1)]"
        style={{ backgroundImage: `url('${bgFooter}')` }}
      >
        <Container>
          <div className="flex items-center justify-between">
            <Link className="uppercase" to="/">
              <img src={logoFooter} alt="logo-footer" />
            </Link>
            <ul className="flex gap-[40px]">
              {menu.map((item) => (
                <li key={item.id}>
                  <Link
                    className="hover:text-primary transition-all"
                    to={item.link}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="social flex gap-[16px]">
              <a href="/">
                <VkIcon />
              </a>
              <a href="/">
                <OkIcon />
              </a>
            </div>
            <div className="phone">
              <a
                className="flex items-center gap-[8px]"
                href="tel:8 800 777 33 33"
              >
                <PhoneIcon />
                <span className="text-[16px]">8 800 777 33 33</span>
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
