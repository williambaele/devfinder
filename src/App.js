import Body from "./components/Body";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="bg-[#131C30] h-screen">
      <div className="container mx-auto w-full md:w-1/2 px-4 md:px-0 py-6 md:py-10 space-y-6">
        <Header />
        <SearchBar />
        <Body />
      </div>
    </div>
  );
}

export default App;
