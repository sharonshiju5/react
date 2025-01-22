import {Component} from "react";
import "../App.css"
class Nav extends Component{
    render(){
        return(
        <nav className="nav">
            <ul>
            <li>home</li>
            <li>about</li>
            <li>shop</li>
            <li>help</li>
            </ul>
        </nav>
        )
    }
}

export default Nav