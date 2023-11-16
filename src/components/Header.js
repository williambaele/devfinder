import React from "react";
import { IoSunnySharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className="w-full flex justify-between">
      <h1 className="text-white text-2xl">devfinder</h1>
      <div className="flex items-center gap-4 cursor-pointer">
        <p className="text-white text-lg">LIGHT</p>
        <IoSunnySharp
          style={{
            color: "white",
            fontSize: "20px",
          }}
        />{" "}
      </div>
    </div>
  );
};

export default Header;
