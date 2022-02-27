import React from "react";
import Nav from "../Navigation";

function Header({ currentPage, handlePageChange }) {

    return(
        <header className="flex-row">
            <h1>
                <a href="/">Max's Portfolio</a>
            </h1>
            <nav>
                <Nav
                    currentPage = {currentPage}
                    handlePageChange = {handlePageChange}
                />
            </nav>
        </header>
    );
};

export default Header;