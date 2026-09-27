import { Link } from "react-router";
import logo from "@images/logo.png";
import Container from "./container/Container";
import SearchIcon from "./icons/SearchIcon";
import FavoritesIcon from "./icons/FavoritesIcon";
import OrdersIcon from "./icons/OrdersIcon";
import ShoppingCart from "./icons/ShoppingCart";
import LogInIcon from "./icons/LogInIcon";
import TextField from "./textField/TextField";
import Button from "./button/Button";

const menu = [
  {
    id: 1,
    title: "Избранное",
    icon: <FavoritesIcon />,
    link: "/favorites",
  },
  {
    id: 2,
    title: "Заказы",
    icon: <OrdersIcon />,
    link: "/orders",
  },
  {
    id: 3,
    title: "Корзина",
    icon: <ShoppingCart />,
    link: "/shoppingcart",
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
            <Link
              to="/catalog"
              className="w-[140px] h-[40px] mr-[16px] flex items-center gap-[28px] rounded-[4px] p-[13px_10px] text-[#fff] bg-[#70C05B]"
            >
              <span className="flex flex-col justify-center items-center w-[20px] h-[24px]">
                <span className="block w-[100%] mb-[5px] h-[1px] bg-[#fff] rounded-[1px]"></span>
                <span className="block w-[100%] mb-[5px] h-[1px] bg-[#fff] rounded-[1px]"></span>
                <span className="block w-[100%] h-[1px] bg-[#fff] rounded-[1px]"></span>
              </span>
              <span>Каталог</span>
            </Link>
            <TextField
              className="mr-[40px] w-[435px]"
              placeholder="Найти товар"
            >
              <button className="cursor-pointer">
                <SearchIcon />
              </button>
            </TextField>
            <ul className="flex items-center gap-[24px] mr-[24px]">
              {menu.map((item) => (
                <li key={item.id}>
                  <Link
                    className="flex flex-col items-center text-[12px] hover:text-primary transition-all"
                    to={item.link}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Button className="w-[157px] h-[40px] flex gap-[42px] text-[#fff] pl-[40px] bg-primary">
              <span>Войти</span>
              <LogInIcon />
            </Button>
          </div>
        </Container>
      </header>
    </>
  );
}

export default Header;
