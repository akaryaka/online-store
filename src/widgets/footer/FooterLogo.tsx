import logoFooter from "@images/logo-footer.png";
import { Link } from "react-router";

const FooterLogo = () => {
  return (
    <>
      <Link
        className="max-[1300px]:mr-[40px] max-[767px]:mb-[16px] max-[767px]:mr-[0]"
        to="/"
      >
        <img
          className="max-[767px]:w-[93px] max-[767px]:w-[64px]"
          src={logoFooter}
          alt="logo-footer"
        />
      </Link>
    </>
  );
};

export default FooterLogo;
