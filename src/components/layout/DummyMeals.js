import React from "react";
const DummyMeals=(props)=>{
    return (
        <ul>
             {props.items.map((item)=>(
                <li>
                    <div>{item.title}</div>
                    <div>{item.description}</div>
                    <div>{item.price}</div>
                    
                  </li>  
                ))}
        </ul>
       
    )
}
export default DummyMeals;