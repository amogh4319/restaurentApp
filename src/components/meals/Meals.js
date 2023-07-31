import React,{Fragment} from "react";
import MealsSummary from "./MealsSummary";
import AvailabelMeals from "./AvailabelMeals";
const Meals =(props)=>{
    return (
        <Fragment>
            <MealsSummary/>
            <AvailabelMeals/>
        </Fragment>
    )
}
export default Meals;