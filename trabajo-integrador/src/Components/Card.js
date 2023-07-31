import React, {useState} from "react";
import './Card.css';

const Card=({image,title,description}) => {
    const [isClicked,setIsClicked] = useState(false);
    const handleClick =() => {
        setIsClicked (!isClicked);
    }
    
    const [isHovered,setIsHovered]=useState(false)    
    const CardStyle ={
        border: isClicked? '3px solid violet' : '1px solid rgb(65, 128, 243)'
    }
    const imageStyle ={
        width: isHovered?'100%': '80%'
    }
    
    const handleMouseTrue = () => {
        setIsHovered (true)
    } 
    const handleMouseFalse = () => {
        setIsHovered (false)
    } 

    return (
        <div className="Card" onClick={handleClick} style={CardStyle}>
           <div onMouseEnter={handleMouseTrue} onMouseLeave={handleMouseFalse}>
            <img src={image} alt="Card" style={imageStyle} />
            </div>
        <h1>{title}</h1><p>{description}</p>
      </div>
        )
    }
export default Card