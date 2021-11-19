import React from 'react';





const veg = [
    {
      pizzaname: "Veg Pizza",
      price: 650,
      description: "The Perfect Combination of Cheese, Our House Tomato Sauce and Finely Cut Chicken Pepperoni Slices! "

    },
    {
        pizzaname: "Margherita Pizza",
        price: 780,
        description: "Our Original Sauce & Fresh Basil Leaves with Mozzarella "
  
      },
      {
        pizzaname: "Spicy Paneer Pizza",
        price: 635,
        description: "Spicy Paneer made with Kashmiri & Birds Eye Chilli Drizzled with our House Spicy Mayonnaise!  "
  
      },
      {
        pizzaname: "Verdure Pizza",
        price: 720,
        description: "Sicilian Olives, Bell Peppers, Sweet Corn Kernels, Mini Heirloom Tomatoes, Red Onions with Mozzarella Cheese"
  
      },
      
      


]







export default function Pizza() {


    return (
        <div >
                 <div className="container">
               <h2 className="heading">Veg Pizza</h2>
               <h5>{veg.length}Items</h5> 
               { veg.map(pizza => ( 
                   <div className= "box">
                     <div className="add-btn-div"> 
                       <h3>{pizza.pizzaname}</h3>
                        <button className="add-btn"> Add</button>

                      </div>
                      <p> {pizza.price}</p>
                      <p>{pizza.description}</p>




                    </div>
               ))}


            </div>


            
        </div>
    )
}
