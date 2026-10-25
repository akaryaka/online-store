import SearchIcon from "@/widgets/icons/SearchIcon";
import TextField from "@/shared/ui/textField/TextField";
import { Link } from "react-router";

const HeaderSearch = () => {
  return (
    <>
      <TextField
        className="mr-[40px] max-[1300px]:mr-[20px] max-[1300px]:w-[336px] w-[435px] max-[991px]:mr-[10px] max-[767px]:w-[257px] max-[767px]:mr-[0] max-[375px]:w-[230px]"
        placeholder="Найти товар"
      >
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
