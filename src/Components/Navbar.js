import React from 'react'


import { useState } from 'react';



import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from "../Components/Images/s-logo.png"




export default function Navbar() {

    const [isMobile, setIsMobile] = useState(false);


    return (
        <div className="navbar-container">

       <div>  
        <img src={logo}
        alt="logo" className="logo"></img>
        <span>location</span>
        </div>

        <ul className= "nav-links">
            <li className="search">Search</li>
            <li className="offers">Offers</li>
            <li className="help">Help</li>
            <li className="signin">Signin</li>
            <li className="cart">Cart</li>

        </ul>



      </div>
    )
}
