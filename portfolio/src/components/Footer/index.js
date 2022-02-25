import React from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return(
        <footer>
            <h3>
                &copy; Max Winter {new Date().getFullYear()}
            </h3>
            <div className="media-icons">
                <a href="https://github.com/mwin1201" target="_blank"><FontAwesomeIcon icon={faGithub} size="4x" /></a>
                <a href="https://www.linkedin.com/in/maxwell-winter/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="4x" /></a>
            </div>
        </footer>
    );
};

export default Footer;