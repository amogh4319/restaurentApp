import React, { Fragment } from "react";
import MainHeader from "./components/layout/MainHeader";
import MealsSummary from "./components/layout/MealsSummary";
import DummyMeals from "./components/layout/DummyMeals";
function App() {
  const dummyItems=[
    {
       title:'Sushi',
       description:'Finest fish and Veggies',
       price:'$ 22.99' 
    },
    {
      title:'Schnitzel',
      description:'A german Speciality!',
      price:'$ 16.50'
    },
    {
      title:'Barbecue Burger',
      description:'American,raw,meaty',
      price:'$ 12.99'
    },
    {
      title:'Green bowl',
      description:'healthy...and green',
      price:'$ 20.00'
    }
  ]
  return (
    <Fragment>
      <MainHeader/>
      <MealsSummary/>
      <DummyMeals items={dummyItems}/>
    </Fragment>
  );
}

export default App;
