import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchBox from "./components/searchBox/SearchBox";
import CardList from "./components/cardList/CardList";
import { useState, useEffect } from "react";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  // fetch data from https://jsonplaceholder.typicode.com/users
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monstersResult) => setMonsters(monstersResult));
  }, []);

  // control filter method
  useEffect(() => {
    const searchMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(searchMonster);
  }, [searchField, monsters]);

  //handle input change
  const handleChange = (e) => {
    const newString = e.target.value.toLocaleLowerCase();
    setSearchField(newString);
  };

  return (
    <div className="App">
      <h1 className="app--title">Monster Rolodex</h1>
      <SearchBox
        className="className"
        placeholder="search"
        handleChange={handleChange}
      />
      <CardList filteredMonsters={filteredMonsters} />
    </div>
  );
};

export default App;
