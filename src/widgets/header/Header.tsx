import Container from "@/widgets/container";
import HeaderLogo from "./ui/logo/HeaderLogo";
import CatalogBtn from "./ui/catalogBtn/CatalogBtn";
import HeaderSearch from "./ui/search/HeaderSearch";
import HeaderMenu from "./ui/menu/HeaderMenu";
import LoginBtn from "./ui/loginBtn/loginBtn";

// для смены содержимого хэдера при смене страниц
// import React from "react";
// import { useLocation } from "react-router-dom";

// function Header() {
//   const location = useLocation();

//   return (
//     <header className="site-header">
//       {location.pathname === "/" && (
//         <h1>Главная страница: Добро пожаловать!</h1>
//       )}
//       {location.pathname === "/about" && <h1>О нашей компании</h1>}
//       {location.pathname === "/contact" && <h1>Свяжитесь с нами</h1>}

//       {/* Универсальный элемент для всех страниц */}
//       <nav>Логотип | Меню</nav>
//     </header>
//   );
// }

// export default Header;

export function Header() {
  return (
    <>
      <div>
        <div>
          <header className="relative z-[100] bg-[#fff] pt-[11px] pb-[11px] shadow-[2px_4px_8px_rgba(0,0,0,0.1)]">
            <Container>
              <div className="flex items-center ">
                <HeaderLogo />
                <CatalogBtn />
                <HeaderSearch />
                <HeaderMenu />
                <LoginBtn />
              </div>
            </Container>
          </header>
        </div>
      </div>
    </>
  );
}

export default Header;
