import "../App.css";
import ProductList from "../components/ProductList";
import { useState, useEffect } from "react";
import Category from "../components/Category";
import SearchBar from "../components/SearchBar";
export default function ProductsPage({ value, setValue }) {
  const [initalProductList, setInitialProductList] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/691f6ab2-c9de-4da0-8db9-f0e96c98a65c"
        );

        const data = await response.json();
        setProducts(data);
        setInitialProductList(data);
      } catch (error) {
        console.error("Произошла ошибка при загрузке", error);
      }
    };
    fetchData();
  }, []);

  const changeCategory = (categoryName) => {
    setActiveIndex(categoryName);
    if (initalProductList) {
      if (categoryName === "popular") {
        const popularProducts = initalProductList.filter(
          (element) => element.rating.rate > 4 && element.rating.count > 300
        );
        setProducts(popularProducts);
      } else {
        const newProducts = initalProductList.filter(
          (element) => element.category === categoryName
        );
        setProducts(newProducts);
      }
    }
  };

  const updateProductListBySearch = (value) => {
    const filteredProduct = products.filter((product) => {
      if (product.title.toLowerCase().includes(value.toLowerCase())) {
        return true;
      }
      return false;
    });

    console.log(filteredProduct);
    setProducts(filteredProduct);
  };

  return (
    <div className="App">
      <SearchBar
        value={value}
        setValue={setValue}
        onClickSearchBar={(serch) => updateProductListBySearch(serch)}
        resetProductList={() => setProducts(initalProductList)}
      />
      <Category
        value={activeIndex}
        onClickCategory={(categoryName) => changeCategory(categoryName)}
      />
      <ProductList list={products} />
    </div>
  );
}
