import Container from "@/widgets/container";
import HeaderLogo from "./ui/logo/HeaderLogo";
import CatalogBtn from "./ui/catalogBtn/CatalogBtn";
import HeaderSearch from "./ui/search/HeaderSearch";
import HeaderMenu from "./ui/menu/HeaderMenu";
import LoginBtn from "./ui/loginBtn/loginBtn";
import { useLocation } from "react-router";
import UserAccount from "@/shared/ui/userAccount";

export function Header() {
  const location = useLocation();

  return (
    <>
      <div>
        <div>
          <header className="relative z-[100] bg-[#fff] pt-[11px] pb-[11px] shadow-[2px_4px_8px_rgba(0,0,0,0.1)]">
            <Container>
              <div className="flex items-center max-[1300px]:justify-between">
                <HeaderLogo />
                <CatalogBtn />
                <HeaderSearch />
                <HeaderMenu />
                {location.pathname !== "/ordersmanager" && <LoginBtn />}
                {location.pathname === "/ordersmanager" && (
                  <UserAccount name="Менеджер" />
                )}
              </div>
            </Container>
          </header>
        </div>
      </div>
    </>
  );
}

export default Header;
