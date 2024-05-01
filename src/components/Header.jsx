import { useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import { ContextLogin } from "../components/Context";
import Main from "./Main";

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const [modalActive, setModalActive] = useState(true)

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({username: '', password: ''})
  const navigate = useNavigate();
  const handleLogin = (userData) => {
    if (userData.username === 'user' && userData.password === '123'){
      setIsLoggedIn(true)
      setUser(userData)
      navigate("/");
    } else {alert("Данные введены не верно");}
  }
  return (
    <ContextLogin.Provider value={{ ...user, isLoggedIn}}>
    <header>
      <div>
        <span className="logo">Prestige</span>
        <ul className="nav">
          <Link to={'/'}><li>Главная страница</li></Link>
          <Link to={'/company'}><li>О компании</li></Link>
          <Link to={'/oplata'}><li>Оплата</li></Link>
          <Link to={'/dostavka'}><li>Доставка</li></Link>
          <li className="login" onClick={() => setModalActive(true)}>Войти</li>
        </ul>
        <ShoppingCartOutlined
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop ${cartOpen && "active"}`}
        />
        
        {cartOpen && <div className="shop-cart"></div>}
      </div>
      <div className="presentation"></div>
      <Modal active={modalActive} setActive={setModalActive} login={handleLogin}>
        <LoginForm />
        <Main/>
      </Modal>
    </header>
    </ContextLogin.Provider>
  );
}
