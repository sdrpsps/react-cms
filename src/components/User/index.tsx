import { useCallback, useRef } from 'react';
import UserSearch from './components/UserSearch';
import UserTable from './components/UserTable';

interface tableRef {
  setQuery: (query: string) => void;
}

function User() {
  const UserTableRef = useRef<tableRef>(null);

  // 执行搜索
  const onSearch = useCallback((query: string) => {
    UserTableRef.current?.setQuery(query);
  }, []);

  return (
    <div>
      <UserSearch onSearch={onSearch} />
      <UserTable ref={UserTableRef} />
    </div>
  );
}

export default User;
