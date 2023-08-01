import React,{useState} from "react";
import CartContext from "./cart-context";
const CartProvider=(props)=>{
  const [items,updatedItems]=useState([]);
    const addItemToCartHandler = (item) => {
        updatedItems([...items,item]);
        console.log('after using state',cartContext);
      };
    
      const removeItemFromCartHandler = (id) => {
        
      };
    
      const cartContext = {
        items: items,
        
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        message:'click me!!!'
      };
    
      return (
        <CartContext.Provider value={cartContext}>
          {props.children}
        </CartContext.Provider>
      );
    };
    
    export default CartProvider;