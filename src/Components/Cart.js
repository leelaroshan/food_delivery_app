import React, {useContext} from 'react'
import {AppContext} from '../App';
import {  Button } from "react-bootstrap";

import './Cart.css'

export default function Cart() {
    const {cart,setCart}  = useContext(AppContext)

    const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);

    const removeFromCart = (el) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
        setCart(hardCopy);
      };
    
    
    

    const cartItems = cart.map((el) => (
        <div key={el.id}>
          <h4 className="cart-item-name">{`${el.name}: $${el.price}`}</h4>
          
          {/* <button type="submit"  onClick={() => removeFromCart(el)}> Remove </button> */}
     
            <Button className="w-20" variant="outline-secondary" type="submit" onClick={() => removeFromCart(el)}
             style={{fontSize:"1vw",backgroundColor:"transparent",color: "green",padding: "5px 5px"}}> Remove</Button>
{/*           
          <Button className="w-20" variant="outline-secondary" type="submit" onClick={() => increaseCart(el)}
             style={{fontSize:"1vw",backgroundColor:"transparent",color: "green",padding: "5px 10px"}}> Add</Button> */}
          {/* <button type="submit"  onClick={ () => increaseCart(el)}>+ </button>  */}
         
        </div>
      ));

    return (
        <div className="cart-container">
        <h1>Cart</h1>
        <p>{cart.length} Items</p>
        <div>{cartItems}</div>
         <div className="subtotal">Subtotal: ${cartTotal}</div>
         <Button className="w-100" variant="success" type="submit" style={{fontSize:"1vw",padding:"5px"}}>CHECKOUT</Button>

        
        </div>
    )
}
