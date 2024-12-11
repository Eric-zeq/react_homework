import React from "react";

import "./week13.css"

function Task({img,title,content,p_content}) {
    return (
        <div class="dcenterd">
            <img src={img} alt="f3"></img>
            <h3>{title}</h3>
            <p>{content}</p>
            <p>{p_content}</p>
        </div>
)
}

export default Task;