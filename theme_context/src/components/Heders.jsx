import React,{useContext} from "react";
import {ThemeContext} from "./ThemProvider";
const Headers = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <header style={{ backgroundColor: theme === "light" ? "white" : "grey", color: theme === "light" ? "grey" : "white" }}>
      <h1>Theme  app</h1>
      <button onClick={toggleTheme} style={{backgroundColor:theme==="light"?"grey":"white",color:theme==="light"?"white":"grey"}}>Toggless Theme</button>
    </header>
  );
}
export default Headers;
