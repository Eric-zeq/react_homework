import React from "react";
import "./content.css";


function Content() {
    // const img_arr = ['/img/service1.png','/img/service2.png','/img/service3.png']
    const content_title = "What We Do?"
    const s_content = [{img: 'https://via.placeholder.com/60x60', title: 'Marketing & SEO Agency', desc: 'Esteem spirit temper too say adieus who direct esteem.',url: 'https://www.google.com/'}, 
        {img: 'https://via.placeholder.com/60x60', title: 'Startup Agency', desc: 'Esteeem spirit temper too say adieus who direct esteem.',url: 'https://www.google.com/'},
        {img: 'https://via.placeholder.com/60x60', title: 'Corporate Business', desc: 'Esteeem spirit temper too say adieus who direct esteem.',url: 'https://www.google.com/'},
        {img: 'https://via.placeholder.com/60x60', title: 'Finance Solution', desc: 'Esteeem spirit temper too say adieus who direct esteem.',url: 'https://www.google.com/'},
        {img: 'https://via.placeholder.com/60x60', title: 'Food & Restaurant', desc: 'Esteeem spirit temper too say adieus who direct esteem.',url: 'https://www.google.com/'},
        {img: 'https://via.placeholder.com/60x60', title: 'Travel Agency', desc: 'Esteeem spirit temper too say adieus who direct esteem.',url: 'https://www.google.com/'},
        ]
    return (
        <div id="content-container">
            <div id="content">
                <p id="content-title">{content_title}</p>
                <div id="content-services">
                    <div className="content-services-items">
                    {Services(s_content[0].img,s_content[0].title,s_content[0].desc,s_content[0].url)}
                    {Services(s_content[1].img,s_content[1].title,s_content[1].desc,s_content[1].url)}
                    {Services(s_content[2].img,s_content[2].title,s_content[2].desc,s_content[2].url)}             
                    </div>
                    <div className="content-services-items">
                    {Services(s_content[3].img,s_content[3].title,s_content[3].desc,s_content[3].url)}
                    {Services(s_content[4].img,s_content[4].title,s_content[4].desc,s_content[4].url)}
                    {Services(s_content[5].img,s_content[5].title,s_content[5].desc,s_content[5].url)}
                    </div>
                </div>
            </div>
        </div>
    )
}

function Services(img,title,desc,url) {
    return (
        <div id="content-services-item_info">
            <div className='content-services-item-img'><img src={img} alt={title} /></div>
            <p>{title}</p>
            <p id='content-services-item-desc' >{desc}</p>
            <a href={url}>Learn More</a>
        </div>
    )
}



export default Content;
