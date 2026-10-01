import Footer from "@/widgets/footer/Footer";
import Header from "@/widgets/header/Header";

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
