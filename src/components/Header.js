import React from "react";
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";

const Header = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      className={`w-full flex justify-between items-center ${
        darkMode ? "" : ""
      }`}
    >
      <h1 className={`text-${darkMode ? "white" : "white"} text-2xl`}>
        devfinder
      </h1>
      <div
        onClick={toggleDarkMode}
        className="flex items-center gap-4 cursor-pointer"
      >
        <p className={`text-${darkMode ? "white" : "white"} text-lg`}>
          {darkMode ? "DARK" : "LIGHT"}
        </p>
        {darkMode ? (
          <IoMoonSharp
            style={{
              color: darkMode ? "white" : "white",
              fontSize: "20px",
            }}
          />
        ) : (
          <IoSunnySharp
            style={{
              color: darkMode ? "white" : "white",
              fontSize: "20px",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
