import ProductPhoto from "./ProductPhoto";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Cardsdata from "./Cards";
import { Card } from "antd";
export default function ProductCard(props) {
  const { title, description, image, rating, count, inStock, onButtonClick,} = props;
  const [text, setText] = useState(false);
  const {id} = useParams();
  const handleBuy = () => {
    onButtonClick()
  }
  return (
    <div className="img">
      {/* <Cardsdata title={title}>
        {description}
        <img src={image}/>
      </Cardsdata> */}

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
        id="btn"
        // onClick={handleBuy}
        disabled={!inStock}
        className={inStock ? "activ" : "inactiv"}
      >
        {inStock ? "Купить" : "нет в наличии"}
      </button>
      <button className="plus">+</button>
    </div>
  );
}
