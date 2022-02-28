import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return(
        <footer>
            <h3>
                &copy; Max Winter {new Date().getFullYear()}
            </h3>
            <div className="media-icons">
                <a className="github" href="https://github.com/mwin1201" target="_blank"><FontAwesomeIcon icon={faGithub} color="white" size="4x" /></a>
                <a className="linkedin" href="https://www.linkedin.com/in/maxwell-winter/" target="_blank"><FontAwesomeIcon icon={faLinkedin} color="white" size="4x" /></a>
            </div>
        </footer>
    );
};

export default Footer;