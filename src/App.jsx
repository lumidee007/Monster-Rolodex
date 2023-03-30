import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchBox from "./components/searchBox/SearchBox";

const App = () => {
  return (
    <div className="App">
      <h1 className="app--title">Monster Rolodex</h1>
      <SearchBox className="" placeholder="search" />
    </div>
  );
};

export default App;
