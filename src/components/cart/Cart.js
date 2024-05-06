import { CartContext } from "./CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import React from "react";
import { Col, Divider, Row } from "antd";
const style = {
  background: "#fff",
  padding: "8px 0",
};
export default function Cart() {
  const cart = useContext(CartContext);
  const navigate = useNavigate();
  const cost = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-modal">
      <AiOutlineCloseCircle
        className="cart-modal-close cart-item-delete"
        onClick={() => {
          navigate("/");
        }}
      />
      <Divider orientation="left">Ваша корзина</Divider>

      <Row gutter={16}>
        <Col className="gutter-row" span={4}>
          <div style={style}>Наименование</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>Количество</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>Цена</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>Сумма</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>Удалить</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>Итого {cost} тг. </div>
        </Col>
      </Row>
      {cart.items.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
}
