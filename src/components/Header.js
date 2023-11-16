import React from "react";
import { IoSunnySharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className="w-full flex justify-between">
      <h1 className="text-white">devfinder</h1>
      <div className="flex items-center gap-4">
        <p className="text-white text-lg">LIGHT</p>
        <IoSunnySharp />
      </div>
    </div>
  );
};

export default Header;
