import { CartContext } from "./CartContext";
import { useContext } from "react";
import CartList from "./CartList";
export default function CartList() {
  const cart = useContext(CartContext);

  const cost = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
      <div>
          <h5>Ваша корзина</h5>
          {cart.items.length ? (
              <table>
                  <thead>
                      <tr>
                          <th>Наименование</th>
                          <th>Количество</th>
                          <th>Цена</th>
                          <th>Сумма</th>
                          <th>Удалить</th>
                      </tr>
                  </thead>
                  <tbody>
                      {cart.items.map(item =>
                          <CartList key={item.id} {...item} />
                      )}
                      <tr>
                          <th colSpan="3">Итого</th>
                          <th>{cost}</th>
                          <th>тг.</th>
                      </tr>
                  </tbody>
              </table>
          ) : (
              <p>Ваша корзина пуста</p>
          )}
      </div>
  );
}
