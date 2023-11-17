import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const SearchBar = ({ onSearchSubmit }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = () => {
    onSearchSubmit(search);
    setSearch("");
  };

  return (
    <div className="w-full bg-[#1F2A49] rounded-xl p-2 h-14 px-4 flex items-center">
      <div className="h-full flex items-center">
        <IoMdSearch
          style={{
            color: "#2563eb",
            fontSize: "26px",
          }}
        />
      </div>
      <div className="h-full w-full  flex items-center">
        <input
          onChange={handleSearchChange}
          placeholder="Search GitHub username"
          className="h-full w-full pl-2 text-white bg-transparent outline-none"
        />
      </div>
      <div className="h-full flex items-center">
        <button
          onClick={handleSearchSubmit}
          className="bg-[#2563eb] text-white text-bold h-full rounded-lg px-4"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
