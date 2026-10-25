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
          <div className="flex items-center justify-between max-[1300px]:justify-center max-[767px]:hidden">
            <FooterLogo />
            <FooterMenu />
            <FooterSocials />
            <FooterPhoneBtn />
          </div>
          <div className="hidden max-[767px]:flex max-[767px]:flex-col">
            <div className="flex justify-between mb-[24px] max-[767px]:flex-col max-[767px]:justify-center max-[767px]:items-center">
              <FooterLogo />
              <div>
                <FooterSocials />
                <FooterPhoneBtn />
              </div>
            </div>
            <FooterMenu />
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
