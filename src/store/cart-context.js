import React from "react";
// eslint-disable-next-line no-unused-vars
const CartContext = React.createContext({
  items: [],
  totalAmount:0,
  addItem: (item) => {},
  removeItem: (id) => {},
  message: 'click me!!!'
});
export default CartContext;
