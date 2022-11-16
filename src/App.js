import { Fragment, useState, React } from "react";
import Cart from "./components/cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCarthandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onCartClick={showCarthandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
