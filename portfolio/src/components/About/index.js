import React from "react";
import max_pic from "../../assets/img/max_picture.jpg";
import hero from "../../assets/img/hero_image.jpg"

function About() {
    return(
        <>
        <div className="hero-img">
            <img src={hero} alt="abstract designs"></img>
            <div className="hero-text">
                <h1>Hi, I am Max. A full stack web developer.</h1>
                <button>Contact me</button>
            </div>
        </div>
        <div className="flex-row">
            <div className="bio">
                <h4>I am a fullstack developer who has been working on various projects over the past year.</h4>
            </div>
            <div className="bio-img">
                <img src={max_pic} alt="temporary bio pick"></img>
            </div>
        </div>
        </>
    );
};

export default About;