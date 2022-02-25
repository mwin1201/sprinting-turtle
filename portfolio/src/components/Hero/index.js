import React from "react";
import max_pic from "../../assets/img/max_picture.jpg";
import hero from "../../assets/img/logo512.png"

function Hero() {
    return(
        <div className="hero-img">
            <img src={hero} alt="temporary hero"></img>
            <div className="hero-text flex-row">
                <h1>Hi, I am Max. A full stack web developer.</h1>
                <button>Contact me</button>
            </div>
            <div className="flex-row">
                <img src={max_pic} alt="picture of Max"></img>
            </div>
        </div>
    );
};

export default Hero;