import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import React,{useContext} from 'react';

const Cart = (props) => {
  const ctx=useContext(CartContext);
  const cartItems = (
    <ul className={classes['cart-items']}>
      {ctx.items.map((item) => (
        <li key={item.id}>Title:{item.title} price:{item.price} quantity:{item.quantity}</li>
      ))}
    </ul>
  );
  let total=0;
  ctx.items.forEach((item)=>{
    total=total+item.price*item.quantity;
    
  })

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{total}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;