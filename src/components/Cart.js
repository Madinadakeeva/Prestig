import ProductCard from "./ProductCard";

export default function Cart({ list }) {
  console.log(list);
  // список продуктов
  return (
    <>
      Korzina: {list.map((listItem) =><ProductCard showBuyButton={false}/>)}
    </>
  );
}
