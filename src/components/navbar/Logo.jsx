import React from "react";
import logo from "../../assets/icon.png";

const Logo = () => {
  return (
    <span className="lg:border lg:rounded-full lg:py-1 lg:hover:shadow-lg">
      <figure className="hover:scale-110 lg:hover:scale-100">
        <img src={logo} alt="logo" className="" />
      </figure>
    </span>
  );
};

export default Logo;
