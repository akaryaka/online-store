import { Link } from "react-router";
import logo from "@images/logo.png";
import logoMobile from "@images/logo-about.png";

const HeaderLogo = () => {
  return (
    <>
      <Link className="mr-[40px] max-[1300px]:mr-[20px]" to="/">
        <img
          className="w-[152px] max-[1300px]:hidden h-[32px]"
          src={logo}
          alt="logo"
        />
        <img
          className="w-[49px] max-[1300px]:block min-[1300px]:hidden h-[40px]"
          src={logoMobile}
          alt="logo"
        />
      </Link>
    </>
  );
};

export default HeaderLogo;
