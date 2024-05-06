import ProductPhoto from "./ProductPhoto";
import { useContext, useState } from "react";
import { CartContext } from "./cart/CartContext";

export default function ProductCard({product}) {
  const { append } = useContext(CartContext);
  const { title, price, rating, description, count,image,  inStock } = product;
  const [text, setText] = useState(false);

  return (
    <div className="img">
      <ProductPhoto url={image} />
      <h4>{title}</h4>
      <h5>Цена: {price}</h5>
      <h5 key={rating.rate.id}>
        Рейтинг: {rating.rate}, Купили: {count}
      </h5>
      {text && <p>{description}</p>}
      <button className="btn" onClick={() => setText(!text)}>
        {!text ? "подробнее" : "скрыть"}
      </button>

      <button
        onClick={() => append(product)}
        id="btn"
        disabled={!inStock}
        className={inStock ? "activ" : "inactiv"}
      >
        {inStock ? "Купить" : "нет в наличии"}
      </button>

      <button onClick={() => append(product)} className="plus">
        +
      </button>
    </div>
  );
}
