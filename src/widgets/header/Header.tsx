import Container from "@/widgets/container";
import HeaderLogo from "./logo/HeaderLogo";
import CatalogBtn from "./catalogBtn/CatalogBtn";
import HeaderSearch from "./search/HeaderSearch";
import HeaderMenu from "./menu/HeaderMenu";
import LoginBtn from "./loginBtn/loginBtn";

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
