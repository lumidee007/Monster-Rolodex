import React from "react";
import "./card.style.css";

export default function Card({ monster }) {
  const { name, email, username, id } = monster;
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h2>Name: {name}</h2>
      <h3>Username: {username}</h3>
      <p>Email: {email}</p>
    </div>
  );
}
