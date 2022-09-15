import React from "react";
import "./button.css"
import { Link } from "react-router-dom";


const Styles = ["btn--primary", "btn--outline"]
const Sizes = ["btn-medium", "btn-large"]

export const Button = ({children, type, buttonStyle, onClick, buttonSize}) => {
    const checkbuttonStyle = Styles.includes(buttonStyle)
        ? buttonStyle
        : Styles[0]
    
    const checkbuttonSize = Sizes.includes(buttonSize)
        ? buttonSize
        : Sizes[0]
    
    return (
        <div>
          <Link to="/sign-up" className="btn-mobile">
            <button className={`btn ${checkbuttonStyle} ${checkbuttonSize}`}
            onClick={onClick}
            type={type}>
                {children}
            </button>
          </Link>
        </div>
    )
}


