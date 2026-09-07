import favoritesIcon from './../assets/favorites.svg'
import ordersIcon from './../assets/orders.svg'
import loginIcon from './../assets/log-in.svg'
import shoppingCartIcon from './../assets/shopping-cart.svg'
 
export function Header() {
  return (
    <>
      <header className="bg-[#fff] pt-[20px] pb-[20px] shadow-[2px_4px_8px_rgba(0,0,0,0.1)]">
        <div className="w-[1440px] ml-[auto] mr-[auto]">
          <div className="flex items-center justify-between ">
            <a className="uppercase" href="#">store</a>
            <button className="flex gap-[28px] rounded-[4px] p-[8px] text-[#fff] w-[140px] bg-[#70C05B] cursor-pointer">
              <span className="flex flex-col justify-center items-center w-[24px] h-[24px]">
                <span className="block w-[100%] mb-[8px] h-[1px] bg-[#fff] rounded-[1px]"></span>
                <span className="block w-[100%] mb-[8px] h-[1px] bg-[#fff] rounded-[1px]"></span>
                <span className="block w-[100%] h-[1px] bg-[#fff] rounded-[1px]"></span>
              </span>
              <span>Каталог</span>
            </button>
            <div className="search border border-[#70C05B] rounded-[4px]">
              <input className="p-[8px_16px]" type="text" placeholder="Найти товар"/>
            </div>
            <ul className="flex items-center gap-[24px]">
              <li>
                <a className="flex flex-col items-center" href="#">
                  <img className='mb-[8px]' src={favoritesIcon} alt="favorites" />
                  Избранное
                </a>
              </li>
              <li>
                <a className="flex flex-col items-center" href="#">
                  <img className='mb-[8px]' src={ordersIcon} alt="orders" />
                  Заказы
                </a>
              </li>
              <li>
                <a className="flex flex-col items-center" href="#">
                  <img className='mb-[8px]' src={shoppingCartIcon} alt="shoppingCart" />
                  Корзина
                </a>
                </li>
              <li>
                <a className="w-[157px] rounded-[4px] flex justify-center text-[#fff] text-[16px] pt-[8px] pb-[8px] bg-[#FF6633]" href="#">
                  Войти
                  <img src={loginIcon} alt="login" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;