import "./navbar-small.css";
import { Link } from "react-router-dom";
const NavBarSmall = () => {
  return (
<nav className="overall">
  <div className="logo">Shobam</div>
 <ul>
  <li id="about">
    <Link to="/about">About</Link>
  </li>
 </ul>
</nav>
  );
};

export default NavBarSmall;
