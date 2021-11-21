import React, {useContext} from 'react'
import {AppContext} from '../App';
import {  Button } from "react-bootstrap";


const veg = [
    {
      id : 1,
      name: "Veg Pizza",
      price: 650,
      description: "The Perfect Combination of Cheese, Our House Tomato Sauce and Finely Cut Chicken Pepperoni Slices! "

    },
    {
       id : 2,
       name: "Margherita Pizza",
        price: 780,
        description: "Our Original Sauce & Fresh Basil Leaves with Mozzarella "
  
      },
      {
        id:3,
        name: "Spicy Paneer Pizza",
        price: 635,
        description: "Spicy Paneer made with Kashmiri & Birds Eye Chilli Drizzled with our House Spicy Mayonnaise!  "
  
      },
      {
        id : 4,
        name: "Verdure Pizza",
        price: 720,
        description: "Sicilian Olives, Bell Peppers, Sweet Corn Kernels, Mini Heirloom Tomatoes, Red Onions with Mozzarella Cheese"
  
      },
      

]







export default function Pizza() {
  const {cart,setCart}  = useContext(AppContext);

  const addToCart = (item) => {
    setCart([...cart, item]);
};



    return (
        <div >
             <div className="container">
               <h2 className="heading">Veg Pizza</h2>
               <p className="item.length">{veg.length}Items</p> 
               { veg.map(item => ( 
                   <div className= "box" key={item.id}>
                     <div className="add-btn-div"> 
                       <h3 className="item-name">{item.name}</h3>
                       <Button className="w-20" variant="outline-secondary" type="submit" onClick={() => addToCart(item)}
                   style={{fontSize:"1vw",backgroundColor:"transparent",color: "green",padding: "5px 10px"}}> Add</Button>

                      </div>
                      <p> ${item.price}</p>
                      <p className="description">{item.description}</p>




                    </div>
               ))}


            </div>


            
        </div>
    )
}
