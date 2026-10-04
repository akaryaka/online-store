import logoFooter from "@images/logo-footer.png";
import { Link } from "react-router";

const FooterLogo = () => {
  return (
    <>
      <Link className="uppercase" to="/">
        <img src={logoFooter} alt="logo-footer" />
      </Link>
    </>
  );
};

export default FooterLogo;
