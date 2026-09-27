import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main className="bg-[#FBF8EC]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
