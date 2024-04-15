import { useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Company from "./Company";
import { Link } from "react-router-dom";
export default function Header() {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">Prestige</span>
        <ul className="nav">
          <Link to={'/company'}><li>О компании</li></Link>
          <Link to={'/oplata'}><li>Оплата</li></Link>
          <Link to={'/dostavka'}><li>Доставка</li></Link>
          <li>Рассрочка и кредит</li>
          <li>Наши партнеры</li>
          <li className="login">Войти</li>
        </ul>
        <ShoppingCartOutlined
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop ${cartOpen && "active"}`}
        />

        {cartOpen && <div className="shop-cart"></div>}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
