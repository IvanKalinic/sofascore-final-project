import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./index.scss";
import { Sun, Moon } from "../../assets/icons/index";

function SwitchButton() {
  const {theme,checked,toggleTheme } = useTheme();

  return (
    <div className="container">
      <span>
        <Sun theme={theme}/>
      </span>
      <div className="switch-checkbox">
        <label className="switch">
          <input type="checkbox" checked={checked} onChange={()=> toggleTheme()} />
          <span className="slider round"></span>
        </label>
      </div>
      <span>
        <Moon theme={theme}/>
      </span>
    </div>
  );
}

export default SwitchButton;
