import Nav from "./Nav";
import logo from "../assets/lemon-logo.svg";

import burger from "../assets/burger.svg";
import { useState } from "react";
const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header>
      <img src={logo} alt="Lemon Logo" />

      <div className="burger" onClick={toggleNav}>
        <img src={burger} alt="menu icon" />
      </div>

      {showNav || window.innerWidth > 768.0 ? <Nav /> : null}
    </header>
  );
};

export default Header;
