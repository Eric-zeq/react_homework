import React from "react";
import "./about.css";

function About() {
    const about_title='Why our Consulting?'
    const about_content='Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing.Apartments frequently or motionless on reasonable'
    return (
        <div id="about-container">
            <div className="about">
                <div id="about-content">
                    <p>{about_title}</p>
                    <p>{about_content}</p>
                    <div id="about-link"><a href="/about">About Us</a></div>
                </div>
                <div id="about-image">
                </div>
            </div>
        </div>
    )
}
export default About;