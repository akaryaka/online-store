import type { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

interface FooterSocialLinkProps extends DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLLinkElement>,
  HTMLLinkElement
> {
  href: string;
}

const FooterSocialLink = ({ href, children }: FooterSocialLinkProps) => {
  return (
    <>
      <a target="_blank" href={href}>
        {children}
      </a>
    </>
  );
};

export default FooterSocialLink;
