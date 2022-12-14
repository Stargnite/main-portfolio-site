import {React, useState} from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Toggle from './../toggle/Toggle'

export default function Navbar() {
  const [active, setIsActive] = useState(false);
  return (
    <div className="body">
      <div className="nav">
        <Link to="./" className="nav-link">
          <div className="logo">Shobam</div>
        </Link>
        <Link to="./about" className="nav-link highlight">
          About
        </Link>
        <Link to="./worklist" className="nav-link">
          Works
        </Link>
        <Link to="./skills" className="nav-link">
          Skills
        </Link>
        <Link to="./contact" className="nav-link">
          Contact
        </Link>
        <a
          href="C:\Users\Oluwatobiloba\OneDrive\Documents\Resume\Resume-Tobiloba-Sobayo.pdf"
          download
        >
          <button className="resume">
            <i class="fa fa-download"></i>Resume
          </button>
        </a>
      </div>
      <Toggle />
    </div>
  );
}
