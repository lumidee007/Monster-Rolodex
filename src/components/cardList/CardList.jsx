import React from "react";
import "./cardList.style.css";
import Card from "../card/Card";

export default function CardList({ filteredMonsters }) {
  return (
    <div className="card--container">
      {filteredMonsters.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
}
