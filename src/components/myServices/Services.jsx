import "./services.css";
import webDev from './../../assets/images/web-development-icon.png';
import responsiveWeb from './../../assets/images/responsive-web.png';
import api from './../../assets/images/api-icon.png';
import { ThemeContext } from "../../context";
import { useRef, useState, useContext } from "react";

const Services = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

  return (
    <div id="services">
      <h1>My Services</h1>

      <div className="s-cont">
        <div className="s-item"
		style={{
			backgroundColor: darkMode ? "rgb(31 41 55/1)" : "#edeef7",
		  }}
		>
          <h5 className="s-item-head">Website design and development</h5>
          <div className="s-item-img">
            <img src={webDev} alt="" />
          </div>
          <p style={{
			        color: darkMode ? "rgb(156 163 175/1)" : "#4d4e4f",
		  }}>
            Custom designs and development using HTML, CSS, JavaScript and
            frameworks like React or Vue.js
          </p>
        </div>

        <div className="s-item"
		style={{
			backgroundColor: darkMode ? "rgb(31 41 55/1)" : "#edeef7",
		  }}
		>
          <h5 className="s-item-head">Responsive designs</h5>
          <div className="s-item-img">
            <img src={responsiveWeb} alt="computer" />
          </div>
          <p style={{
			        color: darkMode ? "rgb(156 163 175/1)" : "#4d4e4f",
		  }}>
            Developing websites that adapt to different screen sizes and
            devices, ensuring that the website looks and functions well on all
            devices
          </p>
        </div>

        <div className="s-item"
		style={{
			backgroundColor: darkMode ? "rgb(31 41 55/1)" : "#edeef7",
		  }}
		>
          <h5 className="s-item-head">Fetching and consuming APIs</h5>
          <div className="s-item-img">
            <img src={api} alt="" />
          </div>
          <p style={{
			        color: darkMode ? "rgb(156 163 175/1)" : "#4d4e4f",
		  }}>
            Implementing and manipulation of APIs to build larger webites, communicate
			with other servers and keeping the site up to date.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
