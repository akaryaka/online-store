import { Outlet } from "react-router";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="bg-[#F9F4E2]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
