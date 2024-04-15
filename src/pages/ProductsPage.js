import "../App.css";
import ProductList from "../components/ProductList";
import { useState, useEffect } from "react";
import Category from "../components/Category";

export default function ProductsPage() {
  // состояние которое говорит залогинен человек или нет, изначально нет
  const [products, setProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(
      "https://mocki.io/v1/0317ea3a-7da9-42b0-a1b4-73efbac84b54"
    )
    .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error(error));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product])}

  //функция которая будет при выборе категории менять какие продукты отображать
  const changeCategory = (i) => {

      setActiveIndex(i);
      if (products){
        const newProducts = products.filter(
          (element) => element.rating.rate > 4 && element.rating.count > 300
        );
        setProducts(newProducts);
      } if (products){
        const newProducts = products.filter(
          (element) => element.category === "chairs"
        );
        setProducts(newProducts);
      }
    
  };

  return (
    <div className="App">
      <Category
        value={activeIndex}
        onClickCategory={(i) => changeCategory(i)}
        
      />
      <ProductList list={products}  />
    </div>
  );
}
