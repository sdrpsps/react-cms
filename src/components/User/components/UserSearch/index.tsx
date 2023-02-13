import Search from 'antd/es/input/Search';
import { forwardRef, useImperativeHandle, useState } from 'react';

interface propsTypes {
  onSearch: (query: string) => void;
}

function UserSearch(props: propsTypes, ref: any) {
  // 用来实现手动刷新表格
  const [serachQuery, setSearchQuery] = useState('');
  useImperativeHandle(ref, () => ({ setSearchQuery }));

  return (
    <Search
      className="mr-4"
      placeholder="请输入要搜索的用户名"
      allowClear
      enterButton
      onSearch={props.onSearch}
      value={serachQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

export default forwardRef(UserSearch);
