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
                product={element}
                key={element.id}
              />
            )
        )}
      </Container>
    </div>
  );
}
