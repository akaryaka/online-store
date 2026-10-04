import { Link } from "react-router";
import { useState } from "react";
import Container from "@/widgets/container/Container";
import { catalogList } from "../catalogList";
import { createPortal } from "react-dom";

const CatalogBtn = () => {
  const [timeoutId, setTimeoutId] = useState(null);
  const [catalogDisplay, setCatalogDisplay] = useState(false);

  const catalogMenu = (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`transition-all z-90 bg-[#fff] w-[100%] catalog-menu shadow-[0px_8px_16px_rgba(0,0,0,0.15)] top-[-100%] absolute left-[0px] z-[0] p-[40px] 
    ${catalogDisplay ? "top-[72px] z-1000" : "top-[-100%]"}
    `}
    >
      <Container>
        <div>
          <ul className="grid grid-rows-4 grid-cols-4 gap-[24px]">
            {catalogList.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    target="_blank"
                    className="text-[16px] font-bold leading-[150%] text-[#414141] hover:text-[#FF6633] transition-all"
                    to={item.link}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </div>
  );

  function handleMouseEnter() {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setCatalogDisplay(true);
  }

  function handleMouseLeave() {
    const id = setTimeout(() => {
      setCatalogDisplay(false);
    }, 200);
    setTimeoutId(id);
  }
  return (
    <>
      <Link
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        to="/catalog"
        className="w-[140px] h-[40px] relative group mr-[16px] flex items-center gap-[28px] rounded-[4px] p-[13px_10px] text-[#fff] bg-[#70C05B]"
      >
        <span className="flex flex-col justify-center items-center w-[20px] h-[24px]">
          <span className="block w-[100%] mb-[5px] h-[1px] bg-[#fff] rounded-[1px]"></span>
          <span className="block w-[100%] mb-[5px] h-[1px] bg-[#fff] rounded-[1px]"></span>
          <span className="block w-[100%] h-[1px] bg-[#fff] rounded-[1px]"></span>
        </span>
        <span>Каталог</span>
      </Link>
      {createPortal(catalogMenu, document.body)}
    </>
  );
};

export default CatalogBtn;
