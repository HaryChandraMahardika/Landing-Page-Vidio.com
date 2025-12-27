import React from "react";
import "./style.css";

function DropdownMenu({ section1Items, section2Items, footerText }) {
  return (
    <div className="dropdown-container">
      <ul className="dropdown-menu1">
        <li><a href="/#">{section1Items[0]}</a></li>
        <li><a href="/#">{section1Items[1]}</a></li>
        <li><a href="/#">{section1Items[2]}</a></li>
      </ul>

      <hr className="divider" />

      <ul className="dropdown-menu2">
        <li><a href="/#">{section2Items[0]}</a></li>
        <li><a href="/#">{section2Items[1]}</a></li>
        <li><a href="/#">{section2Items[2]}</a></li>
      </ul>

      <hr className="divider" />

      <p className="dropdown-footer">{footerText}</p>
    </div>
  );
}

export default DropdownMenu;
