import VkIcon from "@/widgets/icons/VkIcon";
import OkIcon from "@/widgets/icons/OkIcon";
import FooterSocialLink from "./FooterSocialLink";

const FooterSocials = () => {
  return (
    <>
      <div className="social flex gap-[16px]">
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
