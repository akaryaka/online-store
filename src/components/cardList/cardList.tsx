import Card from "./card"
import cards from './cards.json'
import type { Cards, Props } from "./cardList.props"

const CardList = ({ title, subTitle }:Props, { cards }: Cards) => {
  return (
    <>
      <section>
        <header className="flex justify-between mb-[40px]">
          <h2 className="text-[36px]">{title}</h2>
          <a href="#">{subTitle}</a>
        </header>
        <div className="flex gap-40">
          { cards.map((item) => <Card key={item.id} id={item.id} name={item.name} img={item.img}/>) }
        </div>
      </section>
    </>
  )
}

export default CardList