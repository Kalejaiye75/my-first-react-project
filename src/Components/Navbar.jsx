import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import { Button } from "./Button";
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    console.log(click);
    const [button, setButton] = useState(true)
    console.log(button)

    const handleClick = () => setClick(!click)
    const terminateMobileview = () => setClick(false)
    
    const showButton = () => {
        window.innerWidth <= 960
        ? setButton(false)
        : setButton(true)
    }

    window.addEventListener("resize", showButton)

    useEffect(() => {
        showButton()
    }, [])

    return (
        <div>
         <nav className="navbar">
           <div className="nav-box">
            <Link to="/" className="nav-logo" onClick={terminateMobileview}>
                TRVL <img className="fa-fab" src="https://img.icons8.com/offices/30/000000/country.png"/>
            </Link>
            <div className="menu-tab" onClick={handleClick}>
                {click ? <a href="javascript:void(0)" className="closebtn">&times;</a> : <span className="description2 ">&#9776;</span>} 
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={terminateMobileview}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/reserves" className="nav-links" onClick={terminateMobileview}>
                        Reserves
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/bookings" className="nav-links" onClick={terminateMobileview}>
                        Bookings
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/sign-up" className="nav-links-mobile" onClick={terminateMobileview}>
                        Sign up
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
           </div>
           </nav>
        </div>
    )
}

export default Navbar;

