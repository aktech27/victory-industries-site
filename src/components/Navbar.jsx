import "./Navbar.css";
import Logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="top-nav" id="navbar">
      <a href="#home">
        <img src={Logo} alt="home" />
      </a>
      <a href="#about">About</a>
      <a href="#products">Products</a>
      <a href="#gallery">Gallery</a>
      <a href="#contact">Contact</a>
      <span
        className="icon"
        onClick={() => document.querySelector("#navbar").classList.toggle("responsive")}
      >
        <i className="fa fa-bars"></i>
      </span>
    </nav>
  );
};

export default Navbar;
