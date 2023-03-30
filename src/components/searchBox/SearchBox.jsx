import React from "react";
import "./searchBox.style.css";

export default function SearchBox({ handleChange, placeholder, className }) {
  return (
    <div>
      <input
        type="search"
        className={`search-box ${className}`}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}
