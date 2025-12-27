import React from "react";
import "./style.css";

function NavRight() {
  return (
    <ul className="nav-right">
      <li>
        <button className="subscribe">SUBSCRIBE</button>
      </li>
      <li>
        <a href="/sign-in">Sign In</a>
      </li>
    </ul>
  );
}

export default NavRight;
