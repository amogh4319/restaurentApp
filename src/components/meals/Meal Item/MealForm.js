import React from "react";
import classes from './MealForm.module.css';
import Input from "../../UI/Input";
const MealForm =(props)=>{
    return (
        
        <form className={classes.form}>
            <Input 
                label="Amount"
                input={{
                id:"amount"+props.id,
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            
                }}
                
            
            />
            <div className={classes.button}><button>+Add</button></div>
        </form>
        
        
    )
}
export default MealForm;