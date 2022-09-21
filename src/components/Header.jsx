import React from "react";
import logo from "../images/headericon.png"

function Header() {
  return (
    <header>
      <h1>
        <img className="logoheader" src={logo} alt={"App Icon"} />
        Keeper
      </h1>
    </header>
  );
}

export default Header;
