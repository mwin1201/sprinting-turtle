import React from "react";

function Resume() {
    return(
        <section className="resume">
            <div className="frontend">
                <h3>Frontend Proficiencies</h3>
                <ol>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Materialize</li>
                    <li>Handelbars</li>
                </ol>
            </div>
            <div className="backend">
                <h3>Backend Proficiencies</h3>
                <ol>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Heroku</li>
                    <li>Express.js</li>
                    <li>Node.js</li>
                    <li>Sequelize</li>
                    <li>Mongoose</li>
                </ol>
            </div>
            <div className="other">
                <h3>Additional Proficiencies</h3>
                <ul>
                    <li>PWAs</li>
                    <li>bcrypt</li>
                    <li>Font Awesome</li>
                    <li>Git</li>
                    <li>Jest</li>
                    <li>Inquirer</li>
                </ul>
            </div>
            <div className="download-link">
                <h3>Downloadable Resume Document</h3>
                <a href={require("../../assets/docs/2022_Resume.docx")} download>
                    DOWNLOAD NOW
                </a>
            </div>
        </section>
    );
};

export default Resume;