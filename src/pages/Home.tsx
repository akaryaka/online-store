import HomeSection from "@/components/HomeSection"
import heroIcon from '@images/hero-icon.png'

const Home = () => {
  return(
    <>
      <main className="h-[100vh] bg-[#FBF8EC]">
        <div className="hero h-[200px] bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat">
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
    </>
  )
}

export default Home