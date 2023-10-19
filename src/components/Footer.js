import logo from "../assets/lemon-logo.svg";
const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Lemon Logo" />
      <div className="footer-links">
        <h3>Navigation</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
      <div className="footer-links">
        <h3>Contact</h3>
        <ul>
          <li>+123 456-789</li>
          <li>lemon@email.com</li>
          <li>Brinew 45-566 EC 6201</li>
        </ul>
      </div>
      <div className="footer-links">
        <h3>Social Media</h3>
        <ul>
          <a href="https://www.pinterest.com/kevingb20" target="blank">
            <li>Pinterest</li>
          </a>
          <li>Instagram</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
