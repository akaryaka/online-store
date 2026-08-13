import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return(
    <>
      <Header />
      <main className="pt-[30px] pb-[30px]">
        <div className="w-[1440px] ml-[auto] mr-[auto]">
          <ul className="flex gap-[5px]">
            <li><a href="#">Главная</a></li>
            <li><a href="#">Каталог</a></li>
          </ul>
          <h2>Каталог</h2>
          <div>
            <div className="w-[300px] h-[200px] border rounded-[10px] bg-[blue]">
              <h2>Молоко, сыр, яйцо</h2>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Layout;