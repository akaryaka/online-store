export function Header() {
  return (
    <>
      <header className="bg-[#fff] pt-[20px] pb-[20px] shadow-[2px_4px_8px_rgba(0,0,0,0.1)]">
        <div className="w-[1440px] ml-[auto] mr-[auto]">
          <div className="flex justify-between">
            <a className="uppercase" href="#">store</a>
            <ul className="flex gap-[5px]">
              <li><a className="" href="#">Избранное</a></li>
              <li><a className="" href="#">Заказы</a></li>
              <li><a className="" href="#">Корзина</a></li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;