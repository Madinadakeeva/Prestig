import { useContext, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import { ContextLogin } from "../components/Context";
import Main from "./Main";

export default function Header() {
  const [modalActive, setModalActive] = useState(true);
  const { isLoggedIn, login, logout } = useContext(ContextLogin);
  const navigate = useNavigate();
  const handleLogin = (userData) => {
    if (userData.username === "user" && userData.password === "123") {
      login(userData);
    } else {
      alert("Данные введены не верно");
    }
  };
  return (
    <header>
      <div>
        <span className="logo">Prestige</span>
        <ul className="nav">
          {isLoggedIn ? (
            <ShoppingCartOutlined
              className="shop-cart"
              onClick={() => {
                navigate("/cart");
              }}
            />
          ) : (
            <></>
          )}

          <Link to={"/"}>
            <li>Главная страница</li>
          </Link>
          <Link to={"/company"}>
            <li>О компании</li>
          </Link>
          <Link to={"/oplata"}>
            <li>Оплата</li>
          </Link>
          <Link to={"/dostavka"}>
            <li>Доставка</li>
          </Link>
          {isLoggedIn ? (
            <li className="login" onClick={() => logout()}>
              Выйти
            </li>
          ) : (
            <li className="login" onClick={() => setModalActive(true)}>
              Войти
            </li>
          )}
        </ul>
      </div>
      <div className="presentation"></div>
      <Modal active={modalActive} setActive={setModalActive}>
        <LoginForm login={handleLogin} />
        <Main />
      </Modal>
    </header>
  );
}
