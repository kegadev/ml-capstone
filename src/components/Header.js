import Nav from "./Nav";
import logo from "../assets/lemon-logo.svg";

import burger from "../assets/burger.svg";
import { useState, useEffect } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [isScreenBig, setIsScreenBig] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const breakPoint = 768.0;

      setIsScreenBig(screenWidth > breakPoint);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();
  }, []);

  return (
    <header>
      <img src={logo} alt="Lemon Logo" />

      <div className="burger" onClick={toggleNav}>
        <img src={burger} alt="menu icon" />
      </div>

      {showNav || isScreenBig ? <Nav /> : null}
    </header>
  );
};

export default Header;
