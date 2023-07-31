import React from "react";
import classes from './AvailabelMeals.module.css';
import MealItem from "./Meal Item/MealItem";
import Card from "../UI/Card";
const DUMMY_MEALS=[
    {
        id:'m1',
        title:'Sushi',
        description:'Finest fish and Veggies',
        price:22.99 
     },
     {
       id:'m2',
        title:'Schnitzel',
       description:'A german Speciality!',
       price:16.50
     },
     {
        id:'m3',
       title:'Barbecue Burger',
       description:'American,raw,meaty',
       price:12.99
     },
     {
        id:'m4',
       title:'Green bowl',
       description:'healthy...and green',
       price:20
     }

]
const AvailabelMeals =(props)=>{
    const mealsList=DUMMY_MEALS.map((meal)=>(<li >
        <MealItem
        key={meal.id}
        title={meal.title}
        description={meal.description}
        price={meal.price}
        />
    </li>))
    return (
        <section className={classes.meals}>
            <Card>
            <ul className={classes.ul}>{mealsList}</ul>
            </Card>
            
        </section>
    )
}
export default AvailabelMeals;