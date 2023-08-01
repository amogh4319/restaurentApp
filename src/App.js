import React, {useState} from "react";
import MainHeader from "./components/layout/MainHeader";
import Meals from "./components/meals/Meals";
import Cart from './components/cart/Cart';
import CartProvider from "./store/CartProvider";

function App() {
  
    const [cartIsShown, setCartIsShown] = useState(false);
  
    const showCartHandler = () => {
      setCartIsShown(true);
    };
  
    const hideCartHandler = () => {
      setCartIsShown(false);
    };
  
    return (
      <CartProvider>
        {cartIsShown&&<Cart onClose={hideCartHandler} />}
        <MainHeader onShowCart={showCartHandler}/>
        <main>
          <Meals />
        </main>
      </CartProvider>
    );
  }

export default App;
