import CardList from "../components/cardList/cardList"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HomeSection from "../components/HomeSection"
import heroIcon from './../assets/hero-icon.png'
import homeList from './../components/cardList/homeList.json'

const Home = () => {
  return(
    <>
      <Header />
      <main className="h-[100vh] bg-[#FBF8EC] pt-[80px]">
        <div className="hero h-[200px]">
          <div className="container w-[1440px] ml-[auto] mr-[auto]">
            <div className="hero__innner pr-[69px]  flex justify-between items-center">
              <img src={heroIcon} alt="hero-icon" />
              <h1 className="text-[48px]">Доставка бесплатно от 1000 ₽</h1>
            </div>
          </div>
        </div>
        <div className="container w-[1440px] ml-[auto] mr-[auto]">
          <HomeSection />
          
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home