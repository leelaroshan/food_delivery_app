import React from 'react';


const beverages = [
    {
      name: "Cola",
      price: 80,

    },
    {
        name: "Thumbs-up Can 300ml",
        price: 80,
        
  
      },
      {
        name: "Sprite Can 300ml",
        price: 80,
        
  
      },
      {
        name: "Diet Coke Can 300ml",
        price: 80,
  
      },
      
      


]




export default function Beverages() {
    return (
        <div>



<div className="container">
                 <h1 className="heading"> Beverges</h1>
                   <h5>{beverages.length}Items</h5> 
                      { beverages.map(beverages => ( 
                        <div className= "box">
                           <div className="add-btn-div"> 
                             <h3>{beverages.name}</h3>
                              <button className="add-btn"> Add</button>

                            </div>
                         <p> price:{beverages.price}</p>
                          


                        </div>
                        ))}


                </div>





            
        </div>
    )
}
