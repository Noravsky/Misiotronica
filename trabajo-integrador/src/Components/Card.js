import React, {useState} from "react";
import './Card.css';

const Card=({image,title,description}) => {
    return (
        <div className="Card">
            <img src={image} alt="Card" />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}
export default Card