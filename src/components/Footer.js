import logo from "../assets/lemon-logo.svg";
const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Lemon Logo" />
      <div className="footer-links">
        <h3>Navigation</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>About</li>
          <li>Menu</li>
          <li>
            <a href="/booking">Reservations</a>
          </li>
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
          <a href="https://www.instagram.com/kegadev" target="blank">
            <li>Instagram</li>
          </a>
          <a href="https://www.linkedin.com/kegadev" target="blank">
            <li>LinkedIn</li>
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
