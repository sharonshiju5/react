import React from "react";
import { Link } from "react-router-dom";

const Nav=()=>{
    return(
        <div>
            <Link to={"/"}>about</Link>
            <Link to={"/contact"}>contact</Link>
        </div>
    )
}
export default Nav