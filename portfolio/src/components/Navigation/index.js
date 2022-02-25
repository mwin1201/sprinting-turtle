import React from "react";

function Nav() {
    return(
    <ul className="flex-row">
        <li>
            <a href="#about">About me</a>
        </li>
        <li>
            <a href="#projects">Projects</a>
        </li>
        <li>
            <a href="#resume">Resume</a>
        </li>
        <li>
            <a href="#contact">Contact</a>
        </li>
    </ul>
    );
};

export default Nav;