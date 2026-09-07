import CardList from "../components/cardList/cardList"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Home = () => {
  return(
    <>
      <Header />
      <main className="h-[100vh] pt-[80px]">
        <div className="container w-[1440px] ml-[auto] mr-[auto]">
          <CardList />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home