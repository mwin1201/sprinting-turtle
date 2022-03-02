import React from "react";

function Nav({ currentPage, handlePageChange }) {
    return(
    <ul>
        <li>
            <span 
                onClick={() => handlePageChange("About me")}
                className={currentPage === "About me" ? "nav-link active" : "nav-link"}
            >
                About me
            </span>
        </li>
        <li>
            <span 
                onClick={() => handlePageChange("Projects")}
                className={currentPage === "Projects" ? "nav-link active" : "nav-link"}
            >
                Portfolio
            </span>
        </li>
        <li>
            <span 
                onClick={() => handlePageChange("Resume")}
                className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
            >
                Resume
            </span>
        </li>
        <li>
            <span 
                onClick={() => handlePageChange("Contact")}
                className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
            >
                Contact
            </span>
        </li>
    </ul>
    );
};

export default Nav;