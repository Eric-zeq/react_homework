import React from "react";
import "./footer.css";
import img_groupe from "../images/group.svg";
import img_cart from "../images/cart.svg";
import img_heart from "../images/heart.svg";
import img_respect from "../images/respect.svg";

function Footer() {

    const foot_content= [{img:img_groupe,title:'200+',desc:'Team Members'},
        {img:img_cart,title:'97%',desc:'Businesse Success'},
        {img:img_heart,title:'5628',desc:'Happy Clients'},
        {img:img_respect,title:'5637',desc:'Business Done'}]

    return (
        <div className="footer">
            {showFooter(foot_content[0].img,foot_content[0].title,foot_content[0].desc)}
            {showFooter(foot_content[1].img,foot_content[1].title,foot_content[1].desc)}
            {showFooter(foot_content[2].img,foot_content[2].title,foot_content[2].desc)}
            {showFooter(foot_content[3].img,foot_content[3].title,foot_content[3].desc)}
        </div>
    )   
}

function showFooter(img,title,desc) {
    return (
        <footer>
            <div className="footer-item">
                <img src={img} alt={title} />
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </footer>
    )
}

export default Footer;