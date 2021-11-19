import React from 'react';
import pizzaimg from "../Components/Images/pizza.jpeg";
import { useState, useEffect} from 'react';

import './Header.css';





export default function Header() {


    const [scrolled,setScrolled]=useState(false);


    const handleScroll=() => {
      const offset=window.scrollY;
      if(offset > 100 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
  
    useEffect(() => {
      window.addEventListener('scroll',handleScroll)
    })
  
    let headerClasses=['header-bg'];
    if(scrolled){
      headerClasses.push('scrolled');
    }
  
  
  
  
  


    return (
       

            <div className={headerClasses.join(" ")}>
            
              <img src={pizzaimg} className="pizza-img" alt="pizza" />
              <div className="restaurent">
                  <h3>Francesco's pizzeria</h3>
                  <p>pizzas, italian</p>
                  <p>Marlo Skinaka </p>
                  <p>5 stars</p>

              </div>
              <div className="offers"> 
              <p> 10% off | Offers</p>
              </div>
            </div>
            
        
    )
}
