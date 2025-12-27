import React from "react";
import Logo from "./Logo";
import NavLeft from "./NavLeft";
import "./style.css";

function LeftSection() {
  return (
    <div className="left-section">
      <Logo />
      <NavLeft />
    </div>
  );
}

export default LeftSection;