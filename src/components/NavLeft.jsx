import React from "react";
import "./style.css";

function NavLeft() {
  return (
    <ul className="nav-left">
      <li><a href="/home">Home</a></li>
      <li><a href="/live">Live</a></li>
      <li><a href="/sports">Sports</a></li>
      <li><a href="/series">Series</a></li>
      <li><a href="/movies">Movies</a></li>
      <li><a href="/kids">Kids</a></li>
      <li><a href="/more">More &#9662;</a></li>
    </ul>

  );
}

export default NavLeft;