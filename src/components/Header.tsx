import { Link } from "react-router";
import logo from "@images/logo.png";
import Container from "./container/Container";
import SearchIcon from "./icons/SearchIcon";
import FavoritesIcon from "./icons/FavoritesIcon";
import OrdersIcon from "./icons/OrdersIcon";
import ShoppingCart from "./icons/ShoppingCart";
import LogInIcon from "./icons/LogInIcon";

const menu = [
  {
    id: 1,
    title: "Избранное",
    icon: <FavoritesIcon />,
  },
  {
    id: 2,
    title: "Заказы",
    icon: <OrdersIcon />,
  },
  {
    id: 3,
    title: "Корзина",
    icon: <ShoppingCart />,
  },
];

export function Header() {
  return (
    <>
      <header className="bg-[#fff] pt-[11px] pb-[11px] shadow-[2px_4px_8px_rgba(0,0,0,0.1)]">
        <Container>
          <div className="flex items-center ">
            <Link className="mr-[40px]" to="/">
              <img className="w-[152px] h-[32px]" src={logo} alt="logo" />
            </Link>
            <button className="w-[140px] h-[40px] mr-[16px] flex items-center gap-[28px] rounded-[4px] p-[13px_10px] text-[#fff] w-[140px] bg-[#70C05B] cursor-pointer">
              <span className="flex flex-col justify-center items-center w-[20px] h-[24px]">
                <span className="block w-[100%] mb-[5px] h-[1px] bg-[#fff] rounded-[1px]"></span>
                <span className="block w-[100%] mb-[5px] h-[1px] bg-[#fff] rounded-[1px]"></span>
                <span className="block w-[100%] h-[1px] bg-[#fff] rounded-[1px]"></span>
              </span>
              <span>Каталог</span>
            </button>
            <div className="search pr-[8px] mr-[40px] w-[435px] h-[40px] flex justify-between border border-[#70C05B] rounded-[4px]">
              <input
                className="flex-1 p-[8px_16px] outline-none"
                type="text"
                placeholder="Найти товар"
              />
              <SearchIcon />
            </div>
            <ul className="flex items-center gap-[24px] mr-[24px]">
              {menu.map((item) => (
                <li key={item.id}>
                  <Link
                    className="flex flex-col items-center text-[12px] hover:text-primary transition-all"
                    to="/favorites"
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <a
              className="w-[157px] h-[40px] rounded-[4px] flex gap-[42px] text-[#fff] text-[16px] pl-[40px] pt-[8px] pb-[8px] pr-[8px] bg-primary"
              href="#"
            >
              <span>Войти</span>
              <LogInIcon />
            </a>
          </div>
        </Container>
      </header>
    </>
  );
}

export default Header;
