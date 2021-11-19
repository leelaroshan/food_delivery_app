import React from 'react';
import './Nonvegpizza.css'


const pizzas = [
    {
      pizzaname: "Chicken Pizza",
      price: 650,
      description: "The Perfect Combination of Cheese, Our House Tomato Sauce and Finely Cut Chicken Pepperoni Slices! "

    },
    {
        pizzaname: "Pepperoni Pizza",
        price: 780,
        description: "Pepperoni Pizza With A Classic Combination Of Cheese And Pork Pepperoni "
  
      },
      {
        pizzaname: "BBQ Chicken Pizza",
        price: 635,
        description: "Chicken Morsels & Green Onion with Mozzarella, Drizzled with our Secret BBQ Sauce "
  
      },
      {
        pizzaname: "Pizza Pollo Bianca",
        price: 720,
        description: "An Italian Favorite Topped with Mozzarella, Lemon Marinated Chicken, Kalamata Olives, Sliced Mushrooms, Yoghurt and Feta Drizzle"
  
      },
      
      


]





export default function Nonvegpizza() {

    return (
        <div>
          {/* id="nonvegpizza" */}
            <div className="container">
               <h1 className="heading">Non Veg Pizza</h1>
               <h5>{pizzas.length}Items</h5> 
               { pizzas.map(pizza => ( 
                   <div className= "box">
                     <div className="add-btn-div"> 
                       <h3>{pizza.pizzaname}</h3>
                        <button className="add-btn"> Add</button>

                      </div>
                      <p> price:{pizza.price}</p>
                      <p>{pizza.description}</p>




                    </div>
               ))}


            </div>


            
        </div>
    )
}
