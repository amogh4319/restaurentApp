import React, { Fragment } from "react";
import MainHeader from "./components/layout/MainHeader";
import Meals from "./components/meals/Meals";

function App() {
  
  return (
    <Fragment>
      <MainHeader/>
      <main>
        <Meals/>
     </main>
        
    </Fragment>
  );
}

export default App;
