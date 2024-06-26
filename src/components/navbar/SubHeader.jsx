import { NavLink } from "react-router-dom";
import { BsBagPlus } from "react-icons/bs";

const SubHeader = () => {
  return (
    <nav
      className="flex justify-evenly items-center md:justify-center 
    md:gap-20 lg:gap-40 py-3 cursor-pointer text-xs md:text-sm"
    >
      <NavLink to="/">
        <span className="relative group">
          <span className="flex items-center justify-center gap-1">
            <span className="text-base md:text-xl">
              <BsBagPlus />
            </span>
            <span className="">Products</span>
          </span>
          <span className="absolute -bottom-3 left-0 w-0 h-[0.2rem] bg-purple-500 transition-all group-hover:w-full"></span>
        </span>
      </NavLink>
    </nav>
  );
};

export default SubHeader;
