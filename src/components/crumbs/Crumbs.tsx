import { Link } from "react-router";

const Crumbs = () => {
  return (
    <>
      <div className="p-[24px_0px]">
        <Link to="/">Главная</Link>
        <Link to="/">Контакты</Link>
      </div>
    </>
  );
};

export default Crumbs;
