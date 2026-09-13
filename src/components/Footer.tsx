import { Link } from "react-router";

export function Footer() {
  return (
    <>
      <footer className="bg-[#fff] pt-[20px] pb-[20px] shadow-[2px_-4px_8px_rgba(0,0,0,0.1)]">
        <div className="w-[1440px] ml-[auto] mr-[auto]">
          <div className="flex justify-between">
            <a className=" uppercase" href="#">store</a>
            <ul className="flex gap-[5px]">
              <li>
                <Link className="" to="/about">О компании</Link>
              </li>
              <li>
                <Link className="" to="/contacts">Контакты</Link>
              </li>
              <li>
                <Link className="" to="/vacancies">Вакансии</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;