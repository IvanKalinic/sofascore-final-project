import React, { useState, useEffect,useContext, createContext} from "react";
import { lightTheme, darkTheme } from "../components/Theme";
import styled from "styled-components";
import PropTypes from "prop-types";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeContext = createContext();

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  if (themeContext === undefined) {
    throw new Error("useTheme must be used within a ThemeContext");
  }

  return themeContext;
}

export const ThemeProvider = ({ children }) => {
  const [checked, setChecked] = useLocalStorage("checked",false);
  const [theme, setTheme] = useState(lightTheme);
  
  useEffect(()=>{
    if(checked){
      setTheme(darkTheme);
    }
  },[checked]);

  const GlobalStyles = styled.div`
    background: ${theme.background};
    color: ${theme.color};
    min-height:100vh;
    margin-bottom:0px;
    transition: background-color 2000ms ease-in;
    .style{
      background-color:${theme.styleBackground};
    }
    .dd-header{
    background-color:${theme.ddheader};
    }
    .clubs-container {
      background-color:${theme.clubscolor};
    }
    .clubs{
      background-color:${theme.clubscolor};
    }
    .tournament{
      color:#0788d9;
    }
    
    `;

  const toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
      setChecked(!checked);
    } else {
      setTheme(lightTheme);
      setChecked(!checked);
    }
  };

  const value = {
    theme,
    checked,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <GlobalStyles>{children}</GlobalStyles>
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
