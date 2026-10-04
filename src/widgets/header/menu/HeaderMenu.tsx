import { Link } from "react-router";
import { menu } from "../menu";

const HeaderMenu = () => {
  return (
    <>
      <ul className="flex items-center gap-[24px] mr-[24px]">
        {menu.map((item) => (
          <li key={item.id}>
            <Link
              className="flex flex-col gap-[8px] items-center text-[12px] hover:text-primary transition-all"
              to={item.link}
            >
              {<item.icon fill="currentColor" width="24px" height="24px" />}
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HeaderMenu;
