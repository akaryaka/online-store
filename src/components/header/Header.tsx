import { Link } from "react-router";
import logo from "@images/logo.png";
import Container from "@components/container/Container";
import SearchIcon from "@components/icons/SearchIcon";
import FavoritesIcon from "@components/icons/FavoritesIcon";
import OrdersIcon from "@components/icons/OrdersIcon";
import ShoppingCart from "@components/icons/ShoppingCart";
import LogInIcon from "@components/icons/LogInIcon";
import TextField from "@components/textField/TextField";
import Button from "@components/button/Button";
import { useState } from "react";

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

const catalogList = [
  {
    id: 1,
    title: "Молоко, сыр, яйцо",
    link: "/",
  },
  {
    id: 2,
    title: "Напитки",
    link: "/",
  },
  {
    id: 3,
    title: "Бакалея",
    link: "/",
  },
  {
    id: 4,
    title: "Непродовольственные товары",
    link: "/",
  },
  {
    id: 5,
    title: "Хлеб",
    link: "/",
  },
  {
    id: 6,
    title: "Кондитерские изделия",
    link: "/",
  },
  {
    id: 7,
    title: "Здоровое питание",
    link: "/",
  },
  {
    id: 8,
    title: "Детское питание",
    link: "/",
  },
  {
    id: 9,
    title: "Фрукты и овощи",
    link: "/",
  },
  {
    id: 10,
    title: "Чай, кофе",
    link: "/",
  },
  {
    id: 11,
    title: "Зоотовары",
    link: "/",
  },
  {
    id: 12,
    title: "Мясо, птица, колбаса",
    link: "/",
  },
  {
    id: 13,
    title: "Замороженные продукты",
    link: "/",
  },
];

export function Header() {
  const [catalogDisplay, setCatalogDisplay] = useState("-100%");
  const [timeoutId, setTimeoutId] = useState(null);

  function handleMouseEnter() {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setCatalogDisplay("0");
  }

  function handleMouseLeave() {
    const id = setTimeout(() => {
      setCatalogDisplay("-100%");
    }, 200);
    setTimeoutId(id);
  }

  return (
    <>
      <div>
        <header className="relative z-[100] bg-[#fff] pt-[11px] pb-[11px] shadow-[2px_4px_8px_rgba(0,0,0,0.1)]">
          <Container>
            <div className="flex items-center ">
              <Link className="mr-[40px]" to="/">
                <img className="w-[152px] h-[32px]" src={logo} alt="logo" />
              </Link>
              <Link
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                to="/catalog"
                className="w-[140px] h-[40px] relative group mr-[16px] flex items-center gap-[28px] rounded-[4px] p-[13px_10px] text-[#fff] bg-[#70C05B]"
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
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`transition-all bg-[#fff] w-[100%] catalog-menu shadow-[0px_8px_16px_rgba(0,0,0,0.15)] absolute top-[${catalogDisplay}] left-[0px] z-[0] p-[40px]`}
        >
          <div className="h-[72px]"></div>
          <Container>
            <div>
              <ul className="grid grid-rows-4 grid-cols-4 gap-[24px]">
                {catalogList.map((item) => {
                  return (
                    <li key={item.id}>
                      <a
                        className="text-[16px] font-bold leading-[150%] text-[#414141] hover:text-[#FF6633] transition-all"
                        href={item.link}
                      >
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Header;
