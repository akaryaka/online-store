import SearchIcon from "@/widgets/icons/SearchIcon";
import TextField from "@/shared/ui/textField/TextField";

const HeaderSearch = () => {
  return (
    <>
      <TextField className="mr-[40px] w-[435px]" placeholder="Найти товар">
        <button className="cursor-pointer">
          <SearchIcon />
        </button>
      </TextField>
    </>
  );
};

export default HeaderSearch;
