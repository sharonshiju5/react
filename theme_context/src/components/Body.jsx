import React,{useContext} from "react";
import { ThemeContext } from "./ThemProvider";
const Body = () => {
  const { theme,toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{backgroundColor: theme === "light" ? "white" : "grey", color: theme === "light" ? "grey" : "white"}}>
      <h1>Body</h1>
      <button onClick={toggleTheme} style={{backgroundColor:theme==="light"?"grey":"white",color:theme==="light"?"white":"grey"}}>chainge theme</button>
    </div>
  );
}
export default Body
