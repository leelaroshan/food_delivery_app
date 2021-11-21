import React from 'react'
import './Sidebar.css';
import { HashLink as Link} from 'react-router-hash-link';
import Scrollspy from 'react-scrollspy'



export default function Sidebar() {
    
    
    return(
       
         <div className= "nav-menu">

          

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