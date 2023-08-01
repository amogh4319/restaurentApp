import React from "react";
// eslint-disable-next-line no-unused-vars
const CartContext = React.createContext({
  items: [],
  
  addItem: (item) => {},
  removeItem: (id) => {},
  message: 'click me!!!'
});
export default CartContext;
