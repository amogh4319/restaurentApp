import React, { Fragment,useState} from "react";
import MainHeader from "./components/layout/MainHeader";
import Meals from "./components/meals/Meals";
import Cart from './components/cart/Cart';

function App() {
  
    const [cartIsShown, setCartIsShown] = useState(false);
  
    const showCartHandler = () => {
      setCartIsShown(true);
    };
  
    const hideCartHandler = () => {
      setCartIsShown(false);
    };
  
    return (
      <Fragment>
        {cartIsShown&&<Cart onClose={hideCartHandler} />}
        <MainHeader onShowCart={showCartHandler}/>
        <main>
          <Meals />
        </main>
      </Fragment>
    );
  }

export default App;
