import homeList from './../components/cardList/homeList.json'
import CardList from './cardList/cardList'

const HomeSection = () => {
  return (
    <>
      { homeList.map((item) => <CardList id={item.id} title={item.title} subTitle={item.subTitle} />) }
    </>
  )
}

export default HomeSection