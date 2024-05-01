import "../App.css";
import ProductList from "../components/ProductList";
import { useState, useEffect } from "react";
import Category from "../components/Category";
import SearchBar from "../components/SearchBar";

export default function ProductsPage({value, setValue}) {
  const [products, setProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(
      "https://mocki.io/v1/691f6ab2-c9de-4da0-8db9-f0e96c98a65c"
    )
    .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error(error));
  }, [activeIndex]);

  const changeCategory = (categoryName) => {

      setActiveIndex(categoryName);
      if (products){
        const newProducts = products.filter(
          (element) => element.category === categoryName
        );
        setProducts(newProducts);
      } 
      else if (products === 'popular'){
        const ratingElement = products.filter(
          (element) => element.rating.rate > 4 && element.rating.count > 300 === categoryName
        );
        setProducts(ratingElement);
      
      }  
  };

  const filteredProduct = products.filter(product => {
    if(product.title.toLowerCase().includes(value.toLowerCase())){
      return true
    }
    return false
  })

  filteredProduct.map((product, index) => {
    return(
      product={product}
    )
  })
  
  return (
    <div className="App">
      <SearchBar value={value} setValue={setValue} />
      <Category
        value={activeIndex}
        onClickCategory={(categoryName) => changeCategory(categoryName)}
        
      />
      <ProductList list={products}  />
      {/* {
      filteredProduct.map((product, index) => {
        return(
          //product={product} key={index}
        )
      })
      } */}
      
    </div>
  );
}