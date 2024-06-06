import PersonIcon from "./PersonIcon";
import SettingsIcon from "./SettingsIcon";
import ShoppingBagIcon from "./ShoppingBagIcon";
import VerticalLine from "./VerticalLine";
import WishListCartIcon from "./WishListCartIcon";

const NavigationIcons = () => {
  return (
    <div className="flex items-center gap-2 text-2xl lg:text-3xl lg:gap-5 lg:ml-4 cursor-pointer">
      <ShoppingBagIcon />
      <VerticalLine />
      <WishListCartIcon />
      <SettingsIcon />
      <VerticalLine />
      {/* <PersonIcon/> */}
    </div>
  );
};

export default NavigationIcons;
