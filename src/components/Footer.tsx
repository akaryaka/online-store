import { Link } from "react-router";
import logo from '@images/logo.png'
import vkIcon from '@images/vk.svg'
import okIcon from '@images/ok.svg'
import phoneIcon from '@images/phone.svg'

const menu = [
  {
    id: 1,
    title: 'О компании',
    link: '/about'
  },
  {
    id: 2,
    title: 'Контакты',
    link: '/contacts'
  },
  {
    id: 3,
    title: 'Вакансии',
    link: '/vacancies'
  },
  {
    id: 4,
    title: 'Статьи',
    link: '/vacancies'
  },
  {
    id: 5,
    title: 'Политика обработки персональных данных',
    link: '/vacancies'
  }
]

export function Footer() {
  return (
    <>
      <footer className="bg-[#F9F4E2] bg-[url('/bg-footer.png')] pt-[37px] pb-[37px] shadow-[2px_-4px_8px_rgba(0,0,0,0.1)]">
        <div className="w-[1440px] ml-[auto] mr-[auto]">
          <div className="flex justify-between">
            <Link className="uppercase" to="/">
              <img src={logo} alt="logo" />
            </Link>
            <ul className="flex gap-[40px]">
              { menu.map(item => <li key={item.id}><Link to={item.link}>{item.title}</Link></li>)}
            </ul>
            <div className="social flex gap-[16px]">
              <a href="/">
                <img className="w-[24px]" src={vkIcon} alt="vk" />
              </a>
              <a href="/">
                <img className="w-[24px]" src={okIcon} alt="ok" />
              </a>
            </div>
            <div className="phone">
              <a className="flex gap-[8px]" href="tel:8 800 777 33 33">
                <img src={phoneIcon} alt="phone" />
                <span className="text-[16px]">8 800 777 33 33</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;