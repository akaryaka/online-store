import bgFooter from "@images/bg-footer.png";
import Container from "@widgets/container";
import FooterLogo from "./FooterLogo";
import FooterMenu from "./menu/FooterMenu";
import FooterSocials from "./socials/FooterSocials";
import FooterPhoneBtn from "./phone/FooterPhoneBtn";

export function Footer() {
  return (
    <>
      <footer
        className="bg-[#F9F4E2] pt-[37px] pb-[37px] shadow-[2px_-4px_8px_rgba(0,0,0,0.1)]"
        style={{ backgroundImage: `url('${bgFooter}')` }}
      >
        <Container>
          <div className="flex items-center justify-between">
            <FooterLogo />
            <FooterMenu />
            <FooterSocials />
            <FooterPhoneBtn />
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
