import "./navbar-small.css";
import { Link } from "react-router-dom";
const NavBarSmall = () => {
  return (
    <nav className="overall">
      <div className="logo">Shobam</div>
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
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarSmall;
