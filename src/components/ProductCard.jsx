import ProductPhoto from "./ProductPhoto";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
export default function ProductCard(props) {
  const { title, description, image, rating, count, inStock, onButtonClick,} = props;
  const [text, setText] = useState(false);
  const {id} = useParams();
  return (
    <div className="img">
      <ProductPhoto {...props} />
      <h4>{props.title}</h4>
      <h5>Цена: {props.price}</h5>
      <h5 key={rating.id}>
        Рейтинг: {rating}, Купили: {count}
      </h5>
      {text && <p>{props.description}</p>}
      <button className="btn" onClick={() => setText(!text)}>
        {!text ? "подробнее" : "скрыть"}
      </button>
      <NavLink to={'/cart'}> <button
        id="btn"
        disabled={!inStock}
        className={inStock ? "activ" : "inactiv"}
      >
        {inStock ? "Купить" : "нет в наличии"}
      </button></NavLink>
      <button className="plus">+</button>
    </div>
  );
}
