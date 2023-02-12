import Search from 'antd/es/input/Search';

interface propsTypes {
  onSearch: (query: string) => void;
}

function UserSearch(props: propsTypes) {
  return (
    <Search
      className="mr-4 mb-4"
      placeholder="请输入要搜索的用户名"
      allowClear
      enterButton
      onSearch={props.onSearch}
    />
  );
}

export default UserSearch;
