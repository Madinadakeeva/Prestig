import { useContext } from "react";
import ShowAlert from "./ShowAlert";
import Cart from "./Cart";
import { CartContext } from "./CartContext";
export default function Content() {
  const cart = useContext(CartContext);
  return (
    <main className="container">
      {cart.showAlert && <ShowAlert />}
      {cart.showItems && <Cart />}
    </main>
  );
}
