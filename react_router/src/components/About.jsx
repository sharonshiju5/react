import React from "react";
import { Link,useNavigate } from "react-router-dom"
const About=()=>{
    const navigate=useNavigate()
    const id=10
    const handlePage=()=>{
        navigate(`/contact/${id}`)
    }
    return(
        <div>
            <h1>about page</h1>
            <Link to={`/contact/${id}`}>contact</Link>
            <button onClick={handlePage}>contact</button>
        </div>
    )
}
export default About