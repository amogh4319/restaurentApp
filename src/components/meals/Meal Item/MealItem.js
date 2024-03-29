import React from "react";
import classes from './MealItem.module.css';
import MealForm from "./MealForm";
const MealItem =(props)=>{
    const price=`$${props.price.toFixed(2)}`;
    return (
        <li className={classes.meal}>
            <div>
            <div className={classes.h3}><h3>{props.title}</h3></div>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            </div>
        <div>
            
            <MealForm id={props.id} amount={props.amount} item={props}/>
        </div>
        </li>
        
    )
}
export default MealItem;