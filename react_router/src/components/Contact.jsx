import React from "react";
import { Link, useParams } from "react-router-dom"
const contact=()=>{
    const {id}=useParams()
    return(
        <div>
            <h1>contact page {id}</h1>
            <Link to={"/"}>about</Link>
            
        </div>
    )
}
export default contact