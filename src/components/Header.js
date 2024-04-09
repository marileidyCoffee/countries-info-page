import React from "react";
import brightness from '../img/brightness.svg'
import moon from '../img/moon.svg'
const Header = ({ theme, onThemeChange }) => {
  const handleThemeChange = () => {
    onThemeChange();
  };
  const icon = theme === "light" ? brightness: moon
  return (
    <header>
      <div className="App-container">
        <div>
          <h1>Where in the world?</h1>
        </div>
        <div>
          <button className="btn btn-clean" onClick={handleThemeChange}>
            <img className="icon" src={icon} alt="icon" /> {theme} Mode
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
