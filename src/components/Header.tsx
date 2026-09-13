import { Link } from 'react-router';
import favoritesIcon from '@images/favorites.svg'
import ordersIcon from '@images/orders.svg'
import loginIcon from '@images/log-in.svg'
import shoppingCartIcon from '@images/shopping-cart.svg'
import searchIcon from '@images/search.svg'
 
export function Header() {
  return (
    <>
      <header className="bg-[#fff] pt-[20px] pb-[20px] shadow-[2px_4px_8px_rgba(0,0,0,0.1)]">
        <div className="w-[1440px] ml-[auto] mr-[auto]">
          <div className="flex items-center justify-between ">
            <Link className="uppercase" to="/">store</Link>
            <button className="flex gap-[28px] rounded-[4px] p-[8px] text-[#fff] w-[140px] bg-[#70C05B] cursor-pointer">
              <span className="flex flex-col justify-center items-center w-[24px] h-[24px]">
                <span className="block w-[100%] mb-[8px] h-[1px] bg-[#fff] rounded-[1px]"></span>
                <span className="block w-[100%] mb-[8px] h-[1px] bg-[#fff] rounded-[1px]"></span>
                <span className="block w-[100%] h-[1px] bg-[#fff] rounded-[1px]"></span>
              </span>
              <span>Каталог</span>
            </button>
            <div className="search w-[435px] h-[40px] flex justify-between border border-[#70C05B] p-[8px] rounded-[4px]">
              <input className="p-[8px_0px] outline-none" type="text" placeholder="Найти товар"/>
              <button className='cursor-pointer'>
                <img src={searchIcon} alt="search-icon" />
              </button>
            </div>
            <ul className="flex items-center gap-[24px]">
              <li>
                <Link className="flex flex-col items-center" to="/favorites">
                  <img className='mb-[8px]' src={favoritesIcon} alt="favorites" />
                  Избранное
                </Link>
              </li>
              <li>
                <Link className="flex flex-col items-center" to="/orders">
                  <img className='mb-[8px]' src={ordersIcon} alt="orders" />
                  Заказы
                </Link>
              </li>
              <li>
                <Link className="flex flex-col items-center" to="/shoppingcart">
                  <img className='mb-[8px]' src={shoppingCartIcon} alt="shoppingCart" />
                  Корзина
                </Link>
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