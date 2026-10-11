import { Link } from "react-router";
import logo from "@images/logo.png";

const HeaderLogo = () => {
  return (
    <>
      <Link className="mr-[40px]" to="/">
        <img className="w-[152px] h-[32px]" src={logo} alt="logo" />
      </Link>
    </>
  );
};

export default HeaderLogo;
