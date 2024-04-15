
export default function Category({ value, onClickCategory }) {
  const categories = [
    "Популярные продукты",
    "Стулья",
    "Товары для дома",
    "Столы",
    "Товары по низким ценам",
  ];

  return (
    <div>
      <ul className="nav">
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={value === i ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}
