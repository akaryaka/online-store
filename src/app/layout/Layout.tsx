import Footer from "@/widgets/footer";
import Header from "@/widgets/header";
import type { LayoutProps } from "./Layout.props";
import { Helmet } from "react-helmet-async";

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <main className="z-[1] bg-[#FBF8EC]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
