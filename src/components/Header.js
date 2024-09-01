import React from "react";
import logo from "../img/gsgu-logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="main-header">
      <Link to="/">
        {/* <img height={150} width={150} src={logo} alt="GSGU logo" /> */}
        <img height={125} width={170} src={logo} alt="GSGU logo" />
      </Link>

      <h1>Филологический факультет</h1>
      <br />
      <h1>Государственный социально-гуманитарный университет</h1>
    </header>
  );
}

export default Header;
