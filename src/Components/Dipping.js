
import React, {useContext} from 'react'
import {AppContext} from '../App';
import {  Button } from "react-bootstrap";


const beverages = [
    {
      id : 16,
      name: "Creamy Garlic Dip",
      price: 80,

    },
    {
      id : 17,
        name: "Pesto Dip",
        price: 80,
        
  
      },
      {
        id : 18,
        name: "Naagin Sauce",
        price: 80,
        
  
      },
      {
        id : 19,
        name: "Lime Mayo Dip",
        price: 80,
  
      },
      
      


]


export default function Beverages() {
  const {cart,setCart}  = useContext(AppContext)

  const addToCart = (item) => {
      setCart([...cart, item]);
  };


    return (
        <div>

             <div className="container">
                 <h2 className="heading"> Beverges</h2>
                   <p className="item-length">{beverages.length}Items</p> 
                      { beverages.map(item => ( 
                        <div  key={item.id} className= "box">
                           <div className="add-btn-div"> 
                             <h3 className="item-name">{item.name}</h3>
                             <Button className="w-20" variant="outline-secondary" type="submit" onClick={() => addToCart(item)}
                   style={{fontSize:"1vw",backgroundColor:"transparent",color: "green",padding: "5px 10px"}}> Add</Button>
                            </div>
                         <p> ${item.price}</p>
                          


                        </div>
                        ))}


                </div>





            
        </div>
    )
}
