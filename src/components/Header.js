import Nav from "./Nav";
import logo from "../assets/lemon-logo.svg";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Lemon Logo" />

      <Nav></Nav>
    </header>
  );
};

export default Header;
