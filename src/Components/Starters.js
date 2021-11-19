import React from 'react';


const starters = [
    {
      name: "Cheesy Garlic Bread",
      price: 270,
      description: "Our In House Mini Ciabatta Loaves Slathered with Herby Garlic Butter and Cheese"      
    },
    {
        name: "Truffle Fries",
        price: 280,
        description:  "Our In House Mini Ciabatta Loaves Slathered with Herby Ga "
  
      },
      {
        name: "Patatine Fritte",
        price: 235,
        description: "Chicken Morsels & Green Onion with Mozzarella, Drizzled with our Secret BBQ Sauce "
  
      },
      {
        name: "Mushroom Pizza Roll",
        price: 350,
        description: "An Italian Favorite Topped with Mozzarella, Lemon Marinated Chicken, Kalamata Olives, Sliced Mushrooms, Yoghurt and Feta Drizzle"
  
      },
      


]



export default function Starters() {

  const listItems = starters.map(starter => ( 
    <div className= "box">
       <div className="add-btn-div"> 
         <h3>{starter.name}</h3>
          <button className="add-btn" type="submit"> Add</button>

        </div>
     <p> price:{starter.price}</p>
      <p>{starter.description}</p>


    </div>
    ))



    return (
        <div>
              <div className="container">
                 <h1 className="heading"> Appetizers / Starters</h1>
                   <h5>{starters.length}Items</h5> 
                   <div> {listItems} </div>
                      {/* { starters.map(starter => ( 
                        <div className= "box">
                           <div className="add-btn-div"> 
                             <h3>{starter.name}</h3>
                              <button className="add-btn" type="submit"> Add</button>

                            </div>
                         <p> price:{starter.price}</p>
                          <p>{starter.description}</p>


                        </div>
                        ))} */}


                </div>



        </div>
    )
}



