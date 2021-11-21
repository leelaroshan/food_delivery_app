import React from 'react'


import logo from "../Components/Images/s-logo.png";
import {AiOutlineSearch} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';
// import {IoHelpBuoyOutline} from 'react-icons/io';

import './Navbar.css';






export default function Navbar() {
   


    return (
        <div className="navbar-container">

       <div>  
        <img src={logo}
        alt="logo" className="logo"></img>
        <span>location</span>
        </div>

        <ul className= "nav-links">
            <li className="search"><AiOutlineSearch / >Search</li>
            <li className="offers">Offers</li>
            <li className="help">Help</li>
            <li className="signin"><BsPerson />Signin</li>
            <li className="cart">Cart</li>

        </ul>



      </div>
    )
}
