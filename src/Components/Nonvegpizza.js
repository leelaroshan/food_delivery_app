import React, {useContext} from 'react'
import {AppContext} from '../App';
import {  Button } from "react-bootstrap";
import './Nonvegpizza.css'


const pizzas = [
    {
      id : 6,
      name: "Chicken Pizza",
      price: 650,
      description: "The Perfect Combination of Cheese, Our House Tomato Sauce and Finely Cut Chicken Pepperoni Slices! "

    },
    {
      id : 7,
       name: "Pepperoni Pizza",
        price: 780,
        description: "Pepperoni Pizza With A Classic Combination Of Cheese And Pork Pepperoni "
  
      },
      {
        id : 8,
        name: "BBQ Chicken Pizza",
        price: 635,
        description: "Chicken Morsels & Green Onion with Mozzarella, Drizzled with our Secret BBQ Sauce "
  
      },
      {
        id : 9,
        name: "Pizza Pollo Bianca",
        price: 720,
        description: "An Italian Favorite Topped with Mozzarella, Lemon Marinated Chicken, Kalamata Olives, Sliced Mushrooms, Yoghurt and Feta Drizzle"
  
      },
      
      


]





export default function Nonvegpizza() {

  const {cart,setCart}  = useContext(AppContext);

  // adding non veg pizza(item)  to cart

  const addToCart = (item) => {
    setCart([...cart, item]);
   };


    return (
        <div>
          {/* id="nonvegpizza" */}
            <div className="container">
               <h2 className="heading">Non Veg Pizza</h2>
               <p className="item-length">{pizzas.length}Items</p> 
               { pizzas.map(item => ( 
                   <div key={item.id} className= "box">
                     <div className="add-btn-div"> 
                       <h3 className="item-name">{item.name}</h3>
                        {/* <button className="add-btn" type="submit" onClick={()=> addToCart(item)}> Add</button> */}
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
