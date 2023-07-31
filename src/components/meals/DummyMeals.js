import React from "react";
import classes from './AvailabelMeals.module.css';
import Card from '../UI/Card'
const DummyMeals=(props)=>{
    return (
        <Card>
            <div className={classes.meals}>
            <ul className={classes.ul}>
             {props.items.map((item)=>(
                <li>
                    <div>{item.title}</div>
                    <div>{item.description}</div>
                    <div>{item.price}</div>
                    
                  </li>  
                ))}
        </ul>
        </div>
        </Card>
        
        
       
    )
}
export default DummyMeals;