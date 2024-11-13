import React from "react";
//import im from './images/troll.jpeg';

export default function Header(){
    return(
        <header className="header">
            <img src="troll.jpeg" className="header--img"/>
            <h2 className="header--title">MEME GENERATOR</h2>
            <h3 className="header--pro">React project 2</h3>
        </header>
    )
}
