// App.js
import React, { useState, useEffect } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserProfile from "./components/UserProfile";

function App() {
  // DARK MODE
  const [darkMode, setDarkMode] = useState(true);

  // SEARCH
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleSearchSubmit = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      handleSearchSubmit(searchTerm);
    }
  }, [searchTerm]);

  return (
    <div className={`bg-[#131C30] h-screen ${darkMode ? "dark" : "bg-red-50"}`}>
      <div className="container mx-auto w-full md:w-1/2 px-4 md:px-0 py-6 md:py-10 space-y-6">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <SearchBar
          onSearchChange={handleSearchChange}
          onSearchSubmit={handleSearchSubmit}
        />
        <Body userData={userData} />
        <UserProfile userData={userData} />
      </div>
    </div>
  );
}

export default App;
