import React, { useState } from "react";

function Project() {
    const [projects] = useState(
        [
            {
                name: "Rate My Bootcamp",
                technology: ["javascript", "MySQL", "Sequelize", "Handlebars", "Express.js", "Node.js", "fullstack"],
                description: "An interactive website allowing users to sign-up and log-in to leave reviews for bootcamps or instructors.",
                image: require("../../assets/img/bootcamp.jpg"),
                deployed: "https://whispering-scrubland-52233.herokuapp.com/"
            },
            {
                name: "Note Taker Application",
                technology: ["heroku", "Node.js", "javascript"],
                description: "This application allows for users to take notes in a well-designed frontend web page, save those notes, reference them later, and delete them when they are no longer needed.",
                image: require("../../assets/img/note_taker.jpg"),
                deployed: "https://calm-mesa-86482.herokuapp.com/"
            },
            {
                name: "Budget Tracker",
                technology: ["pwa", "javascript", "mongoose", "mongodb"],
                description: "This is a progressive web application allowing users to track their budgets even when offline. Users can enter their transactions and valuations quickly into the application and instantly see a visual represenation of the budgetary movements in a graph below.",
                image: require("../../assets/img/budget_tracker.jpg"),
                deployed: "https://damp-fortress-34583.herokuapp.com/"
            },
            {
                name: "Social Network API",
                technology: ["mongoose", "mongoDB", "javascript", "REST"],
                description: "This repository contains the routes and controllers for users to interact with User, Thought, and Reaction models in MongoDB using Mongoose. There is no frontend connected to these routes and database but that is for anyone looking to jumpstart a website for social interaction to create on top of this backend code.",
                image: require("../../assets/img/social_media_api.jpg"),
                deployed: "https://github.com/mwin1201/jump-roping-ducks"
            },
            {
                name: "Tech Blog",
                technology: ["fullstack", "MVC", "javascript", "handlebars", "MySQL", "sequelize"],
                description: "This is a blog site with a technology focus. Users can sign in and start creating tech posts of any kind with links to the articles or sites related to the topic. Once signed in you can also comment on other posts on the site. Users who are not logged in can view comments but cannot add their own.",
                image: require("../../assets/img/tech_blog_new.jpg"),
                deployed: "https://pacific-island-74047.herokuapp.com/"
            },
            {
                name: "Dinner and a Movie",
                technology: ["materialize", "jquery", "javascript", "api"],
                description: "Dinner and a Movie is for the everyday person wanting to be independent, make their own meals and relax with some movies.",
                image: require("../../assets/img/dinner_movie.jpg"),
                deployed: "https://mwin1201.github.io/Project-1-Dinner-and-a-Movie/"
            }
        ]
    );


    return(
        <section className="projects">
        {projects.map(project => (
            <div className="card" key={project.name}>
                <img src={project.image}></img>
                <div className="card-body">
                    <p className="card-title">{project.name}</p>
                    <p className="card-text">{project.description}</p>
                    <button className="card-btn"><a href={project.deployed} target="_blank">View Application</a></button>
                </div>
            </div>
        ))}
        </section>
    );
};

export default Project;