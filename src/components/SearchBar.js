import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;
// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       color: "#1677ff",
//     }}
//   />
// );
// const onSearch = (value, _e, info) => console.log(info?.source, value);
const SearchBar = ({ value, setValue, onClickSearchBar, resetProductList }) => {
  const handleChange = (value) => {
    if (value) {
      setValue(value);
    } else {
      resetProductList();
    }
  };
  return (
    <Space direction="vertical">
      <Search
        value={value}
        onChange={(event) => handleChange(event.target.value)}
        placeholder="input search text"
        onSearch={onClickSearchBar}
        enterButton
      />
    </Space>
  );
};
export default SearchBar;
