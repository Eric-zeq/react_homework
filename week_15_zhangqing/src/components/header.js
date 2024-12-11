import React from "react";
import "./header.css";

function Header({quote, p_text1, p_text2}) {
    const menu_array = ["Home", "Pages", "Services", "Case study", "Blog", "Contact"];

    const Menu = () => {

        const handleClick = (event) => {
            event.preventDefault();
            const menu_items = document.querySelectorAll(".menu_item");
            menu_items.forEach(item => {
                if(item.id === event.target.id){
                    item.style.borderBottom = "2px solid rgb(35, 123, 238)";
                    }
                    else {
                    item.style.borderBottom = "none";
                    }
            });
        }
    
        return (
            <div id="menu">
                <a id="menu_home" className="menu_item" href="#" onClick={handleClick}>{menu_array[0]}</a>
                <a id="menu_pages" className="menu_item" href="#" onClick={handleClick}>{menu_array[1]}</a>
                <a id="menu_services" className="menu_item" href="#" onClick={handleClick}>{menu_array[2]}</a>
                <a id="menu_casestudy" className="menu_item" href="#" onClick={handleClick} >{menu_array[3]}</a>
                <a id="menu_blog" className="menu_item" href="#" onClick={handleClick}>{menu_array[4]}</a>
                <a id="menu_contact" className="menu_item" href="#" onClick={handleClick}>{menu_array[5]}</a>
            </div>
        )
    };

  return (
    <div className="header">
        <div id='top-bar' >
            <Menu />
            <div id="quote">
                <a href="/login">{quote}</a>
            </div>
        </div>
        <div id="header-content">
            <p>{p_text1}<br/>{p_text2}</p>
            <div id='btn-container'>
                <a href="/services" className="btn">Our Services</a>
            </div>
        </div>
    </div>
    );
}

export default Header;