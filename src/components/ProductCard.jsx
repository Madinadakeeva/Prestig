import ProductPhoto from "./ProductPhoto";
import { useContext, useState } from "react";
import { CartContext } from "./cart/CartContext";
export default function ProductCard(props) {
  const { append } = useContext(CartContext);
  const { rating, count, inStock } = props;
  const [text, setText] = useState(false);

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

      <button
        onClick={() => append(props)}
        id="btn"
        disabled={!inStock}
        className={inStock ? "activ" : "inactiv"}
      >
        {inStock ? "Купить" : "нет в наличии"}
      </button>

      <button onClick={() => append(props)} className="plus">
        +
      </button>
    </div>
  );
}
