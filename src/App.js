import React, { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`bg-[#131C30] h-screen ${darkMode ? "dark" : "bg-red-50"}`}>
      <div className="container mx-auto w-full md:w-1/2 px-4 md:px-0 py-6 md:py-10 space-y-6">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <SearchBar />
        <Body />
      </div>
    </div>
  );
}

export default App;
