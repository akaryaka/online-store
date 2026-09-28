import Footer from "@/components/Footer";
import Header from "@/components/header/Header";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main className="z-[1] bg-[#FBF8EC]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
