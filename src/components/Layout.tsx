import Footer from "./Footer";
import Header from "./Header";
import arrowRight from './../assets/chevron-right.svg'

function Layout() {
  return(
    <>
      <Header />
      <main className="bg-[#F9F4E2] pt-[30px] pb-[30px]">
        <div className="w-[1440px] ml-[auto] mr-[auto]">
          <ul className="flex mb-[24px] gap-[5px]">
            <li><a href="#">Главная</a></li>
            <img src={arrowRight} alt="arrow-right" />
            <li><a href="#">Каталог</a></li>
          </ul>
          <h1 className="text-[64px] font-bold mb-[60px]">Каталог</h1>
          <div className="grid grid-cols-4">
            <div className="w-[300px] h-[200px] border cursor-pointer rounded-[10px] bg-[blue]">
              <h2>Молоко, сыр, яйцо</h2>
            </div>
            <div className="w-[300px] h-[200px] border cursor-pointer  rounded-[10px] bg-[blue]">
              <h2>Молоко, сыр, яйцо</h2>
            </div>
            <div className="w-[300px] h-[200px] border cursor-pointer  rounded-[10px] bg-[blue]">
              <h2>Молоко, сыр, яйцо</h2>
            </div>
            <div className="w-[300px] h-[200px] border cursor-pointer  rounded-[10px] bg-[blue]">
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


