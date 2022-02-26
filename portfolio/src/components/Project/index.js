import React, { useState } from "react";
// import bootcamp_img from "../../assets/img/stars.jpg";
// import noteTaker_img from "../../assets/img/geometry-image.jpg";

function Project() {
    const [projects] = useState(
        [
            {
                name: "Rate My Bootcamp",
                technology: ["javascript", "MySQL", "Sequelize", "Handlebars", "Express.js", "Node.js", "fullstack"],
                description: "An interactive website allowing users to sign-up and log-in to leave reviews for bootcamps or instructors.",
                image: require("../../assets/img/stars.jpg"),
                deployed: "https://whispering-scrubland-52233.herokuapp.com/"
            },
            {
                name: "Note Taker Application",
                technology: ["heroku", "Node.js", "javascript"],
                description: "This application allows for users to take notes in a well-designed frontend web page, save those notes, reference them later, and delete them when they are no longer needed. The application utilizes Node and Express to handle the server calls.",
                image: require("../../assets/img/geometry-image.jpg"),
                deployed: "https://calm-mesa-86482.herokuapp.com/"
            }
        ]
    );


    return(
        <section className="projects">
            <div className="flex-row">
            {projects.map(project => (
                <div className="card" key={project.name}>
                    <img src={project.image}></img>
                    <div className="card-body">
                        <h5 className="card-title">{project.name}</h5>
                        <p className="card-text">{project.description}</p>
                        <a href={project.deployed}>View Application</a>
                    </div>
                </div>
            ))}
            </div>
        </section>
    );
};

export default Project;