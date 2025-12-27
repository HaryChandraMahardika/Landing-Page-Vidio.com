import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <LeftSection />
      <RightSection />
    </header>
  );
}

export default Header;