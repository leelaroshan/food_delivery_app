import React, {useContext} from 'react'
import {AppContext} from '../App';
import {  Button } from "react-bootstrap";


const starters = [
    {
      id : 11,
      name: "Cheesy Garlic Bread",
      price: 270,
      description: "Our In House Mini Ciabatta Loaves Slathered with Herby Garlic Butter and Cheese"      
    },
    {
       id : 12,
        name: "Truffle Fries",
        price: 280,
        description:  "Our In House Mini Ciabatta Loaves Slathered with Herby Ga "
  
      },
      {
        id : 13,
        name: "Patatine Fritte",
        price: 235,
        description: "Chicken Morsels & Green Onion with Mozzarella, Drizzled with our Secret BBQ Sauce "
  
      },
      {
        id : 14,
        name: "Mushroom Pizza Roll",
        price: 350,
        description: "An Italian Favorite Topped with Mozzarella, Lemon Marinated Chicken, Kalamata Olives, Sliced Mushrooms, Yoghurt and Feta Drizzle"
  
      },
      


]



export default function Starters() {


  const {cart,setCart}  = useContext(AppContext)


  const addToCart = (item) => {
    setCart([...cart, item]);
};



  const listItems = starters.map(item => ( 
        <div className= "box" key={item.id}>
       <div className="add-btn-div"> 
         <h3 className="item-name">{item.name}</h3>
         <Button className="w-20" variant="outline-secondary" type="submit" onClick={() => addToCart(item)}
                   style={{fontSize:"1vw",backgroundColor:"transparent",color: "green",padding: "5px 10px"}}> Add</Button>

        </div>
     <p> price:{item.price}</p>
      <p className="description">{item.description}</p>


    </div>
    ))



    return (
        <div>
              <div className="container">
                 <h2 className="heading"> Appetizers / Starters</h2>
                   <p>{starters.length}Items</p> 
                   <div> {listItems} </div>
                     


                </div>



        </div>
    )
}



