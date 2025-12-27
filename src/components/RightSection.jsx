import React, { useState } from "react";
import SearchBar from "./SearchBar";
import NavRight from "./NavRight";
import DropdownMenu from "./DropdownMenu";
import "./style.css";

function RightSection() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const section1Items = [
    "Subscriptions and Purchases",
    "Promo Vouchers",
    "My Library"
  ];

  const section2Items = [
    "Connect to TV",
    "Help and Others",
    "Settings"
  ];

  return (
    <div className="right-section">
      <SearchBar />
      <NavRight />
    <div className="menu-wrapper">
    <button onClick={handleDropdown} className="menu-button">
      &hellip;
    </button>
    {isOpen && (
      <DropdownMenu
        section1Items={section1Items}
        section2Items={section2Items}
        footerText={`Copyright ©2025 Vidio.com\nPT Vidio Dot Com. All Rights Reserved.`}
      />
    )}
  </div>
</div>

  );
}

export default RightSection;
