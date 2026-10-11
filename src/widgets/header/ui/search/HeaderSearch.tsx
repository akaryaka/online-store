import SearchIcon from "@/widgets/icons/SearchIcon";
import TextField from "@/shared/ui/textField/TextField";
import { Link } from "react-router";

const HeaderSearch = () => {
  return (
    <>
      <TextField className="mr-[40px] w-[435px]" placeholder="Найти товар">
        {/* временно */}
        <Link to="/search" className="cursor-pointer flex items-center">
          <SearchIcon />
        </Link>
        {/* <button className="cursor-pointer flex items-center">
          <SearchIcon />
        </button> */}
      </TextField>
    </>
  );
};

export default HeaderSearch;
