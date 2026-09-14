import Container from '@/components/container/Container'
import bannerIcon from '@images/banner-icon.png'
import bannerBg from '@images/banner-bg.png'

const Home = () => {
  return(
    <>
      <div 
        className="banner h-[200px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bannerBg}')`}}
      >
        <Container>
          <div className="hero__innner pr-[69px]  flex justify-between items-center">
            <img src={bannerIcon} alt="hero-icon" />
            <h1 className="text-[48px]">Доставка бесплатно от 1000 ₽</h1>
          </div>
        </Container>
      </div>
      <main className="bg-[#FBF8EC] pt-[80px] pb-[80px]">
        <Container>
          <div className="ml-[auto] mr-[auto]">
            <h1 className="text-[64px] font-bold mb-[60px]">Акции</h1>
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
          <div className=" pt-[80px] ml-[auto] mr-[auto]">
            <h1 className="text-[64px] font-bold mb-[60px]">Новинки</h1>
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
          <div className="w-[1440px] pt-[80px] ml-[auto] mr-[auto]">
            <h1 className="text-[64px] font-bold mb-[60px]">Покупали раньше</h1>
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
        </Container>
      </main>
    </>
  )
}

export default Home