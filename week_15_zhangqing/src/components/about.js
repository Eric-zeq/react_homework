import React from "react";
import "./about.css";

function About({about_title,about_content}) {

    return (
        <div className="about">
            <div id="about-content">
                <p>{about_title}</p>
                <p>{about_content}</p>
                <div id="about-link"><a href="/about">About Us</a></div>
            </div>
            <div id="about-image">
                
            </div>

        </div>
    )
}
export default About;