import Footer from "@/widgets/footer";
import Header from "@/widgets/header";
import type { LayoutProps } from "./Layout.props";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import ChevronDownIcon from "@/widgets/icons/ChevronDownIcon";
import Button from "@/shared/ui/button";

const Layout = ({ title, children }: LayoutProps) => {
  const [upBtnView, setUpBtnView] = useState("none");

  function hideScrollBtn() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setUpBtnView("block");
      } else {
        setUpBtnView("none");
      }
    });
  }

  function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    hideScrollBtn();
  }, []);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <main className="z-[1] bg-[#FBF8EC]">{children}</main>
      <div style={{ display: upBtnView }}>
        <Button
          type="icon-btn"
          size="m"
          accent="primary"
          icon={<ChevronDownIcon fill="#fff" />}
          clickEvent={scrollUp}
          className="up fixed bottom-[50px] p-[8px] rotate-[180deg] rounded-[4px] z-[1000] right-[50px] cursor-pointer"
        />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
