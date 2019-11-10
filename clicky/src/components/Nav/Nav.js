import React from "react";
import "./style.css";

const Nav = props => (
    <nav
        class="navbar"><ul><li>Clicky Game</li>
        
        
        <li class="">{props.correctIncorrect}</li>
        
        <li>Score - Top: {props.topScore} | Current: {props.score}</li></ul>
        
        
        <header>{props.title}</header>
        
        
            
        </nav>  

       
);

export default Nav;