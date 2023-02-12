import { useCallback, useRef } from 'react';
import UserAddModal from './components/UserAddModal';
import UserSearch from './components/UserSearch';
import UserTable from './components/UserTable';

interface tableRef {
  setQuery: (query: string) => void;
  getUserListHandler: () => void;
}

function User() {
  const UserTableRef = useRef<tableRef>(null);

  // 执行搜索
  const onSearch = useCallback((query: string) => {
    UserTableRef.current?.setQuery(query);
  }, []);
  // 新增用户成功后刷新表格
  const onUpdate = useCallback(() => {
    UserTableRef.current?.getUserListHandler();
  }, []);

  return (
    <>
      <header className="flex">
        <UserSearch onSearch={onSearch} />
        <UserAddModal onUpdate={onUpdate} />
      </header>
      <section>
        <UserTable ref={UserTableRef} />
      </section>
    </>
  );
}

export default User;
