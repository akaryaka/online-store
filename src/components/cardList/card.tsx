import type { Cards } from "./cardList.props"

const Card = ( {name, img}: Cards ) => {
  return (
    <>
      <div className="card cursor-pointer bg-[#fff] w-[272px]">
        <div className="header">
          <img src={img} alt={name} />
        </div>
        <div className="content p-[8px]">
          <p>{name}</p>
          <div className="rating"></div>
          <button className="w-[100%] pt-[8px] pl-[8px] cursor-pointer text-[#70C05B] border border-[#70C05B]">В корзину</button>
        </div>
      </div>
    </>
  )
}

export default Card