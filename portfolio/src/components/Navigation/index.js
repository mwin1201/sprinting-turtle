import React from "react";

function Nav({ currentPage, handlePageChange }) {
    return(
    <ul className="flex-row">
        <li>
            <a 
                onClick={() => handlePageChange("About me")}
                className={currentPage === "About me" ? "nav-link active" : "nav-link"}
            >
                About me
            </a>
        </li>
        <li>
            <a 
                onClick={() => handlePageChange("Projects")}
                className={currentPage === "Projects" ? "nav-link active" : "nav-link"}
            >
                Portfolio
            </a>
        </li>
        <li>
            <a 
                onClick={() => handlePageChange("Resume")}
                className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
            >
                Resume
            </a>
        </li>
        <li>
            <a 
                onClick={() => handlePageChange("Contact")}
                className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
            >
                Contact
            </a>
        </li>
    </ul>
    );
};

export default Nav;