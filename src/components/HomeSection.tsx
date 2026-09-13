import homeList from './../components/cardList/homeList.json'
import cards from './../components/cardList/cards.json';

const Card = () => {
  return (
    <>
      {cards.map(item => {
        <div key={item.id}>{item.name}</div>
      })}
    </>
  )
} 

const List = () => {
  return (
    <div>
      {homeList.map((item) => (
        <div key={item.id}>{item.title} {item.subTitle} </div>
      ))}
    </div>
  )
}

const HomeSection = () => {
  return <Card />
    // <>
      {/* <List /> */}
      
    // </>
  
}

export default HomeSection