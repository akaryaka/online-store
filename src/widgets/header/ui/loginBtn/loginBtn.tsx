import { useState, useEffect } from "react";
import LogInIcon from "@/widgets/icons/LogInIcon";
import Button from "@/shared/ui/button/Button";
import CalendarIcon from "@/widgets/icons/CalendarIcon";
import ChevronDownIcon from "@/widgets/icons/ChevronDownIcon";
import CloseIcon from "@/widgets/icons/CloseIcon";
import EyeOff from "@/widgets/icons/EyeOff";
import ModalInput from "@/widgets/modal";
import TextField from "@/shared/ui/textField";
import Text from "@/shared/ui/text";

const LoginBtn = () => {
  const [modalDisplay, setModalDisplay] = useState("hidden");
  const [loginDisplay, setLoginDisplay] = useState("block");
  const [signUpDisplay, setSignUpDisplay] = useState("hidden");
  function signUpOpen() {
    setLoginDisplay("hidden");
    setSignUpDisplay("block");
  }

  function loginOpen() {
    setLoginDisplay("block");
    setSignUpDisplay("hidden");
  }

  function modalOpen() {
    setModalDisplay("block");
  }

  // function handleKeyClose(event: any) {
  //   if (event.key === "Escape") {
  //     alert(1);
  //   }
  // }

  function modalClose(event: any) {
    // if (event.target === "") {
    //   setModalDisplay("hidden");
    // }
    console.log(event.target.className);

    setModalDisplay("hidden");
  }

  useEffect(() => {
    if (modalDisplay == "block") {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // handleKeyClose();
    // Очистка при размонтировании компонента
    return () => document.body.classList.remove("overflow-hidden");
  }, [modalDisplay]);
  return (
    <>
      <Button
        clickEvent={modalOpen}
        accent="primary"
        size="m"
        rightIcon={<LogInIcon />}
        type="text-btn"
        className="max-[1300px]:w-[40px] w-[157px] items-center justify-end p-[8px] gap-[38px] max-[767px]:hidden"
      >
        <span className="max-[1300px]:hidden">Вход</span>
      </Button>
      <div
        className={`modal w-[100%] z-[1000] ${modalDisplay} fixed top-[0px] left-[0px] h-[100vh] bg-[#000] flex justify-center bg-[rgba(252,213,186,0.8)] items-center`}
      >
        <div
          className={`login ${loginDisplay} relative p-[72px_80px_40px_80px] bg-[#fff] w-[420px] h-[431px] rounded-[4px]`}
        >
          <button
            onClick={modalClose}
            className="btn-close-modal absolute right-[0px] top-[0px] cursor-pointer bg-[#F3F2F1] p-[8px]"
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
            className="mb-[32px] h-[auto] text-[24px] text-[#414141]"
            id="modal-signin-input"
            placeholder="8-800-555 3535"
          />
          <Button
            size="l"
            accent="primaryDisabled"
            type="text-btn"
            className="text-[24px] leading-[150%] justify-center items-center p-[16px] w-[100%] mb-[32px]"
          >
            Вход
          </Button>
          <div className="flex justify-between items-center pr-[16px]">
            <Button
              type="text-btn"
              size="m"
              accent="default"
              clickEvent={signUpOpen}
              className="w-[121px] items-center justify-center border text-[#70C05B] border-[#70C05B] text-center"
            >
              Регистрация
            </Button>
            <a href="#" className="text-[#606060] text-[12px] leading-[150%]">
              Забыли пароль?
            </a>
          </div>
        </div>
        <div
          className={`signup ${signUpDisplay} relative p-[72px_80px_40px_80px] bg-[#fff] w-[687px] rounded-[4px]`}
        >
          <button
            onClick={modalClose}
            className="absolute right-[0px] top-[0px] cursor-pointer bg-[#F3F2F1] p-[8px]"
          >
            <CloseIcon />
          </button>
          <h2 className="mb-[40px] text-center font-bold text-[24px] leading-[150% text-[#414141]]">
            Регистрация
          </h2>
          <h3 className="text-[18px] text-center font-bold leading-[150%] text-[#414141] mb-[24px]">
            Обязательные поля
          </h3>
          <div className="w-[100%] grid grid-cols-2 gap-x-[32px] gap-y-[16px] mb-[40px]">
            <ModalInput label="Телефон" placeholder="8-800-555 3535" />
            <ModalInput label="Дата рождения" placeholder="01.01.1980">
              <CalendarIcon />
            </ModalInput>
            <ModalInput label="Фамилия" placeholder="" />
            <div>
              <label
                className="text-[18px] leading-[150%] text-[#8F8F8F]"
                htmlFor="modal-signin-input"
              >
                Регион
              </label>
              <div
                className="cursor-pointer flex justify-between h-[auto] border-none shadow-[1px_2px_4px_rgba(0,0,0,0.1)] pl-[16px] pr-[8px] pt-[8px] pb-[8px] text-[16px] text-[#414141]"
                id="modal-signin-input "
              >
                <span>Коми</span>
                <ChevronDownIcon fill="#414141" />
              </div>
            </div>
            <ModalInput label="Имя" placeholder="" />
            <div>
              <label
                className="text-[18px] leading-[150%] text-[#8F8F8F]"
                htmlFor="modal-signin-input"
              >
                Населенный пункт
              </label>
              <div
                className="cursor-pointer flex justify-between h-[auto] border-none shadow-[1px_2px_4px_rgba(0,0,0,0.1)] pl-[16px] pr-[8px] pt-[8px] pb-[8px] text-[16px] text-[#414141]"
                id="modal-signin-input "
              >
                <span>Усть-Ижма</span>
                <ChevronDownIcon fill="#414141" />
              </div>
            </div>
            <ModalInput label="Пароль" placeholder="">
              <button className="flex items-center cursor-pointer">
                <EyeOff />
              </button>
            </ModalInput>
            <div>
              <label
                className="text-[18px] leading-[150%] text-[#8F8F8F]"
                htmlFor="modal-signin-input"
              >
                Пол
              </label>
              <div className="w-[100%] flex p-[4px] bg-[#F3F2F1] rounded-[4px]">
                <Button
                  size="s"
                  type="text-btn"
                  accent="secondary"
                  className="w-[50%] flex justify-center items-center"
                >
                  <Text size="xs">Мужской</Text>
                </Button>
                <Button
                  size="s"
                  type="text-btn"
                  accent="greyscale"
                  className="w-[50%] flex justify-center items-center"
                >
                  <Text size="xs">Женский</Text>
                </Button>
              </div>
            </div>
            <ModalInput label="Повторите пароль" placeholder="">
              <button className="flex items-center cursor-pointer">
                <EyeOff />
              </button>
            </ModalInput>
          </div>
          <h3 className="text-[18px] text-center font-bold leading-[150%] text-[#414141] mb-[24px]">
            Необязательные поля
          </h3>
          <div className="grid grid-cols-2 gap-x-[32px] gap-y-[16px] grid-rows-1 mb-[16px]">
            <ModalInput placeholder="" label="Номер карты" />
            <ModalInput placeholder="" label="E-mail" />
          </div>
          <div className="flex w-[100%] items-center gap-[8px] mb-[40px]">
            <label
              className="border border-[#BFBFBF] block w-[20px] h-[20px] rounded-[4px]"
              htmlFor="#"
            ></label>
            <span className="text-[#8F8F8F] text-[16px] leading-[150%]">
              У меня нет карты лояльности
            </span>
          </div>
          <div className="flex justify-center">
            <Button
              type="text-btn"
              size="l"
              accent="primaryDisabled"
              className="text-[24px] flex justify-center items-center w-[260px] leading-[150%] p-[16px] mb-[32px]"
            >
              <Text size="l">Продолжить</Text>
            </Button>
          </div>
          <div className="flex justify-center items-center pr-[16px]">
            <Button
              clickEvent={loginOpen}
              type="text-btn"
              size="m"
              accent="default"
              className="w-[121px] flex justify-center items-center"
            >
              <span>Вход</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginBtn;
