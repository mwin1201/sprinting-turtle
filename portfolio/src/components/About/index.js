import React from "react";
import max_pic from "../../assets/img/max_picture.jpg";
import { useSpring, animated } from "react-spring";

function About() {

    const styles = useSpring({ 
        from: { opacity: 0, marginLeft: -100, marginRight: 100 },
        to: { opacity: 1, marginLeft: 0, marginRight: 0 }
    });

    return(
        <>
        <div className="hero-img">
            <div className="hero-text">
                <h1>Hi, I'm Max. A full stack web developer.</h1>
                <animated.button style={styles}><a href="#about">About me</a></animated.button>
            </div>
        </div>
        <div className="title">
            <h2 id="about">About Me</h2>
        </div>
        <div className="bio-section">
            <div className="bio">
                <h3>I'm Max, a Technical Business Analyst, who is moving into the world of development from Minnesota.</h3>
                <h4>With over 5 years of technical support and project management experience I felt a career change to a fullstack developer would be more rewarding. Receiving a Fullstack Coding Bootcamp certificate from the University of Minnesota has propelled my skills to the competitive level.</h4>
                <h4>Outside of coding I enjoy discussing and watching soccer, especially Liverpool.</h4>
            </div>
            <div className="bio-img">
                <img src={max_pic} alt="temporary bio pick"></img>
            </div>
        </div>
        </>
    );
};

export default About;