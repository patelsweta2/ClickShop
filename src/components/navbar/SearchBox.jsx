import { AiOutlineSearch } from "react-icons/ai";
import { useFilterContext } from "../../context/FilterContext";

const SearchBox = () => {
  const {
    filters: { text },
    updateFilterValue,
  } = useFilterContext();
  return (
    <div className="fle items-center gap-1 border-2 border-neutral-400 md:bg-neutral-200 w-[45vw] h-10 rounded-md">
      <span className="text-2xl text-neutral-500 pl-2">
        <AiOutlineSearch />
      </span>
      <div className="text-xs flex text-center">
        <form onSubmit={(e) => e.preventDefault} autoComplete="off">
          <input
            type="search"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder="Search for items.."
            className="w-[35vw] bg-transparent placeholder:text-neutral-500 text-neutral-800 md:w-[40vw] outline-none"
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
