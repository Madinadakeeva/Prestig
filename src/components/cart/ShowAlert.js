import { useEffect, useContext } from "react";
import { CartContext } from "./CartContext";

export default function ShowAlert() {
  const cart = useContext(CartContext);

  useEffect(() => {
    const timeoutId = setTimeout(cart.hideAlert, 9000);
    return () => clearTimeout(timeoutId);
  }, [cart.showAlert]);

  return <div className="show-alert">{cart.showAlert}</div>;
}
