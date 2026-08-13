export function Header() {
  return (
    <>
      <header className="bg-[brown] pt-[20px] pb-[20px]">
        <div className="w-[1440px] ml-[auto] mr-[auto]">
          <div className="flex justify-between">
            <a href="#"><img src="" alt="logo"/></a>
            <ul className="flex gap-[5px]">
              <li><a className="text-[white]" href="#">Избранное</a></li>
              <li><a className="text-[white]" href="#">Заказы</a></li>
              <li><a className="text-[white]" href="#">Корзина</a></li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;