import React,{useContext} from "react";
import classes from './MealForm.module.css';
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";
const MealForm =(props)=>{
    const ctx=useContext(CartContext);
    
    const addItemToCart=(event)=>{
        event.preventDefault();
        const quantity=document.getElementById("amount"+props.id).value;
        ctx.addItem({...props.item,quantity:quantity});
        // console.log('after addItemToCart',ctx)

    }
    return (
       
        <form className={classes.form}>
            {/* {console.log('after rendering',ctx.items)} */}
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
            <div className={classes.button} onClick={addItemToCart}><button>+Add</button></div>
        </form>
        
        
    )
}
export default MealForm;