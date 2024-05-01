import Container from "./Container";
import ProductCard from "./ProductCard";

export default function ProductList({ list }) {

  return (
    <div className="presentation">
      <Container>
        {list.map(
          (element) =>
            element.inStock && (
              <ProductCard
                title={element.title}
                url={element.image}
                description={element.description}
                price={element.price}
                rating={element.rating.rate}
                inStock={element.inStock}
                key={element.id}
              />
            )
        )}
      </Container>
    </div>
  );
}
