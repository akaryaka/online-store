import VkIcon from "@/widgets/icons/VkIcon";
import OkIcon from "@/widgets/icons/OkIcon";
import FooterSocialLink from "./FooterSocialLink";

const FooterSocials = () => {
  return (
    <>
      <div className="social flex gap-[16px] max-[1300px]:mr-[24px] max-[767px]:mr-[0] max-[767px]:mb-[16px] max-[767px]:justify-center">
        <FooterSocialLink href="https://vk.ru/">
          <VkIcon />
        </FooterSocialLink>
        <FooterSocialLink href="https://ok.ru/">
          <OkIcon />
        </FooterSocialLink>
      </div>
    </>
  );
};

export default FooterSocials;
