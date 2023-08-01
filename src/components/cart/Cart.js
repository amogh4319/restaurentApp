import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import React,{useContext} from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
  const ctx=useContext(CartContext);

  let totalAmount=0;
  ctx.items.forEach((item)=>{
    totalAmount=totalAmount+Number(item.price*item.quantity);
  })
  const hasItems=ctx.items.length>0;
  const cartItemAddHandler=item=>{
    ctx.addItem({...item,quantity:1})
  }
  const cartItemRemoveHandler=id=>{
    ctx.removeItem(id);
  }
  const cartItems = (
    <ul className={classes['cart-items']}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          amount={item.quantity}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}
        />
      ))}
    </ul>
  );
 

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems&&<button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;