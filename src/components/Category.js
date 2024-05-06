import { Button, Flex } from "antd";
export default function Category({ value, onClickCategory }) {
  const category = ["decor", "tables", "chairs", "popular"];

  return (
    <div>
      <Flex gap="small" wrap>
        <ul className="nav">
          {category.map((categoryName, i) => (
            <Button
              key={i}
              onClick={() => onClickCategory(categoryName)}
              className={value === categoryName ? "active" : ""}
            >
              {categoryName}
            </Button>
          ))}
        </ul>
      </Flex>
    </div>
  );
}
