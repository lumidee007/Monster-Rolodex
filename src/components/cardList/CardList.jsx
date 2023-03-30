import React from "react";

export default function CardList({ filteredMonsters }) {
  return (
    <div>
      {filteredMonsters.map((monster) => {
        return <h1>{monster.name}</h1>;
      })}
    </div>
  );
}
