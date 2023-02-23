import { useState, useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Navigation from "./components/Navigation/Navigation";
import { ThemeContext } from "./context";
import Contact from "./components/contact/Contact";
import Worklist from "./components/workList/Worklist";
import About from "./components/About/About";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/Skills";
// import Toggle from "./components/toggle/Toggle";
import NavBarSmall from "./components/SS-navbar/NavBarSmall.jsx";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="general"
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <div className="App">
        <div className="big-screen">
          <div className="current-screen">
            <Navbar />
            <Navigation />
          </div>
        </div>
        <div className="small-screen">
          <NavBarSmall />
          <About />
          <Skills />
          <Worklist />
          <Contact />
          <p className="copy-right">&copy; Copyright 2023 Sobayo Tobi</p>
        </div>
      </div>
    </div>
  );
}

export default App;
