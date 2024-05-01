export default function Category({ value, onClickCategory }) {
  const category = [
    "decor",
    "tables",
    "chairs",
    'popular'
  ];

  return (
    <div>
      <ul className="nav">
        {category.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(categoryName)}
            className={value === categoryName ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}
