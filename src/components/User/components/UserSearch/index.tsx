import Search from 'antd/es/input/Search';

interface propsTypes {
  onSearch: (query: string) => void;
}

function UserSearch(props: propsTypes, ref: any) {
  return <Search placeholder="请输入要搜索的用户名" allowClear enterButton size="large" onSearch={props.onSearch} />;
}

export default UserSearch;
