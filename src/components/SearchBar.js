import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
const SearchBar = ({value, setValue}) => (
  <Space direction="vertical">
    <Search value={value} onChange={(event) => setValue(event.target.value)} placeholder="input search text" onSearch={onSearch} enterButton />
  </Space>
);
export default SearchBar;