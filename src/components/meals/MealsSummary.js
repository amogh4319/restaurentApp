import React from "react";
import classes from './MealsSummary.module.css';
const MealsSummary=(props)=>{
    return (
        <div className={classes.summary}>
            <h2 className={classes.h2}>Delicious Food,Delivered To You</h2>
            <p>Choose your favorite meal from our broad selection of availabel meals and enjoy delicious lunch or dinner at home</p>
            <p>All our meals are cooked with high-quality ingredients,just-in-time and ofcourse by experienced chefs!!!</p>
        </div>
    )
}
export default MealsSummary;