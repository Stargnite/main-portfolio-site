import { useState, useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Navigation from "./components/Navigation/Navigation";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#e6e1df",
        color: darkMode && "white",
      }}
    >
      <div className="App">
        <div className="current-screen">
          <Navbar />
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export default App;
