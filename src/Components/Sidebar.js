import React from 'react'
import './Sidebar.css';


// import { Link} from 'react-router-dom';
import { HashLink as Link} from 'react-router-hash-link';
import {Sidedata} from './Sidedata';
import Scrollspy from 'react-scrollspy'



export default function Sidebar() {
    
    
    return(
       
         <div className= "nav-menu">

            {/* <ul className="items">
           
           {Sidedata.map((item, index) => {
             return (
              <li key={index} className={item.cName} activeClass="active">
                <Link smooth to={item.path}>
               <span className='navText'>{item.title}</span>
                </Link>
              </li>
              ); 
            })}
    
            </ul> */}

        <Scrollspy 
        className="scrollspy" items={ ['pizza', 'nonvegpizza', 'starters', 'dippingsauce', 'beverages'] } 
        currentClassName="isCurrent">
        <li><Link to="#pizza">Pizza</Link></li>
        <li><Link to="#nonvegpizza">Non Veg Pizza</Link></li>
        <li><Link to="#starters">Appetizers / Starters</Link></li>
        <li><Link to="#dippingsauce">Dipping Sauce</Link></li>
        <li><Link to="#beverages">Beverages</Link></li>
      </Scrollspy>

       </div>

    )
    }