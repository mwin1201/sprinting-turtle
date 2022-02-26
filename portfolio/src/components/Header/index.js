import React from "react";
import Nav from "../Navigation";

function Header() {
    return(
        <header className="flex-row">
            <h1>
                <a href="/">Max's Portfolio</a>
            </h1>
            <nav>
                <Nav />
            </nav>
        </header>
    );
};

export default Header;