import { Link } from "react-router";
import logo from "@images/logo.png";
import Container from "@components/container/Container";
import SearchIcon from "@components/icons/SearchIcon";
import LogInIcon from "@components/icons/LogInIcon";
import TextField from "@components/textField/TextField";
import Button from "@components/button/Button";
import { useState } from "react";
import CloseIcon from "../icons/CloseIcon";
import { menu } from "./menu";
import { catalogList } from "./catalogList";

export function Header() {
  const [catalogDisplay, setCatalogDisplay] = useState("-100%");
  const [modalDisplay, setModalDisplay] = useState("hidden");
  const [loginDisplay, setLoginDisplay] = useState("block");
  const [signUpDisplay, setSignUpDisplay] = useState("hidden");
  const [timeoutId, setTimeoutId] = useState(null);

  function handleMouseEnter() {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setCatalogDisplay("72px");
  }

  function handleMouseLeave() {
    const id = setTimeout(() => {
      setCatalogDisplay("-100%");
    }, 200);
    setTimeoutId(id);
  }

  function modalOpen() {
    setModalDisplay("block");
  }

  function modalClose() {
    setModalDisplay("hidden");
  }

  function signUpOpen() {
    setLoginDisplay("hidden");
    setSignUpDisplay("block");
  }

  function loginOpen() {
    setLoginDisplay("block");
    setSignUpDisplay("hidden");
  }

  return (
    <>
      <div>
        <div
          className={`modal w-[100%] z-[1000] ${modalDisplay} absolute top-[0px] left-[0px] h-[100vh] bg-[#000] flex justify-center bg-[rgba(252,213,186,0.8)] items-center`}
        >
          <div
            className={`login ${loginDisplay} relative p-[72px_80px_40px_80px] bg-[#fff] w-[420px] h-[431px] rounded-[4px]`}
          >
            <button
              onClick={modalClose}
              className="absolute right-[0px] top-[0px] cursor-pointer bg-[#F3F2F1] p-[8px]"
            >
              <CloseIcon />
            </button>
            <h2 className="mb-[32px] text-center font-bold text-[24px] leading-[150% text-[#414141]]">
              Вход
            </h2>
            <label
              className="text-[18px] leading-[150%] text-[#8F8F8F]"
              htmlFor="modal-signin-input"
            >
              Телефон
            </label>

            <TextField
              style={{ caretColor: "#fff" }}
              className="mb-[32px] h-[auto] text-[24px]  text-[#414141] focus:shadow-[4px_8px_16px_rgba(112,192,91,0.2)] active:shadow-[4px_8px_16px_rgba(112,192,91,0.2)]"
              id="modal-signin-input"
              placeholder="8-800-555 3535"
            />
            <Button className="text-[24px] leading-[150%] text-[#FF6633] p-[16px] bg-[#FCD5BA] w-[100%] mb-[32px]">
              Вход
            </Button>
            <div className="flex justify-between items-center pr-[16px]">
              <Button
                clickEvent={signUpOpen}
                className="w-[121px] border text-[#70C05B] border-[#70C05B] w-[121px] text-center"
              >
                Регистрация
              </Button>
              <a href="#" className="text-[#606060] text-[12px] leading-[150%]">
                Забыли пароль?
              </a>
            </div>
          </div>
          <div
            className={`signup ${signUpDisplay} relative p-[72px_80px_40px_80px] bg-[#fff] w-[420px] h-[431px] rounded-[4px]`}
          >
            <button
              onClick={modalClose}
              className="absolute right-[0px] top-[0px] cursor-pointer bg-[#F3F2F1] p-[8px]"
            >
              <CloseIcon />
            </button>
            <h2 className="mb-[32px] text-center font-bold text-[24px] leading-[150% text-[#414141]]">
              Регистрация
            </h2>
            <label
              className="text-[18px] leading-[150%] text-[#8F8F8F]"
              htmlFor="modal-signin-input"
            >
              Телефон
            </label>
            <TextField
              style={{ caretColor: "#fff" }}
              className="mb-[32px] h-[auto] text-[24px]  text-[#414141] focus:shadow-[4px_8px_16px_rgba(112,192,91,0.2)] active:shadow-[4px_8px_16px_rgba(112,192,91,0.2)]"
              id="modal-signin-input"
              placeholder="8-800-555 3535"
            />
            <Button className="text-[24px] leading-[150%] text-[#FF6633] p-[16px] bg-[#FCD5BA] w-[100%] mb-[32px]">
              Вход
            </Button>
            <div className="flex justify-between items-center pr-[16px]">
              <Button
                clickEvent={loginOpen}
                className="w-[121px] border text-[#70C05B] border-[#70C05B] w-[121px] text-center"
              >
                Вход
              </Button>
              <a href="#" className="text-[#606060] text-[12px] leading-[150%]">
                Забыли пароль?
              </a>
            </div>
          </div>
        </div>
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
                      {<item.icon />}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Button
                clickEvent={modalOpen}
                className="w-[157px] h-[40px] flex gap-[42px] text-[#fff] pl-[40px] bg-primary"
              >
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
