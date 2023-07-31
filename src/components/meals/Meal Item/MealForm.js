import React from "react";
import classes from './MealForm.module.css';
const MealForm =(props)=>{
    return (
        <div>
            <form className={classes.form}>
            <label>Amount:</label>
            <input type="number"/>
            <div className={classes.button}><button>+Add</button></div>
        </form>
        </div>
        
    )
}
export default MealForm;