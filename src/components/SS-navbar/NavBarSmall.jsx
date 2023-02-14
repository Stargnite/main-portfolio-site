import "./navbar-small.css";
// import { Link } from "react-router-dom";

const NavBarSmall = () => {
  return (
    <nav className="overall">
      <div className="logo">Shobam</div>
      <div className="nav-btn">
        <a
          href="https://docs.google.com/document/d/1HRSf0vq37Z9WphhQIGYmm6_MhlFd1HDAiVhO63MWrik/edit?usp=sharing"
          target="_blank"
        >
          <button className="resume">
            <i class="fa fa-download"></i>Resume
          </button>
        </a>

        <div class="toggle-nav">
          <i class="fas fa-bars"></i>
        </div>
      </div>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#works">Works</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarSmall;
