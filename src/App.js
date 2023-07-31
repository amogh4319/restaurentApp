import React, { Fragment } from "react";
import MainHeader from "./components/layout/MainHeader";
import MealsSummary from "./components/layout/MealsSummary";
function App() {
  return (
    <Fragment>
      <MainHeader/>
      <MealsSummary/>
    </Fragment>
  );
}

export default App;
