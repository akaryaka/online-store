export function Footer() {
  return (
    <>
      <footer className="bg-[brown] pt-[20px] pb-[20px]">
        <div className="w-[1440px] ml-[auto] mr-[auto]">
          <div className="flex justify-between">
            <a className="text-[white] uppercase" href="#">store</a>
            <ul className="flex gap-[5px]">
              <li><a className="text-[white]" href="#">О компании</a></li>
              <li><a className="text-[white]" href="#">Контакты</a></li>
              <li><a className="text-[white]" href="#">Вакансии</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;