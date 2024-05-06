import { useContext } from "react";
import { CartContext } from "./CartContext";
import { AiOutlineClose } from "react-icons/ai";
import React from "react";
import { Col, Row } from "antd";
const style = {
  background: "#fff",
  padding: "8px 0",
};
export default function CartItem(props) {
  const cart = useContext(CartContext);
  return (
    <div>
      <Row gutter={16}>
        <Col className="gutter-row" span={4}>
          <div style={style}>{props.title}</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>{props.quantity}</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>{props.price}</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>{props.price * props.quantity}</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>
            <AiOutlineClose
              className="cart-item-delete"
              onClick={() => cart.remove(props.id)}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
