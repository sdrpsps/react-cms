import { useCallback, useRef } from 'react';
import UserAddModal from './components/UserAddModal';
import UserRefresh from './components/UserRefresh';
import UserSearch from './components/UserSearch';
import UserTable from './components/UserTable';

// 表格组件暴露类型
interface tableRef {
  currentQuery: string;
  setQuery: (query: string) => void;
  setPagenum: (pagenum: number) => void;
  getUserListHandler: () => void;
}

// 搜索组件暴露类型
interface searchRef {
  setSearchQuery: (query: string) => void;
}

function User() {
  const UserTableRef = useRef<tableRef>(null);
  const UserSearchRef = useRef<searchRef>(null);

  // 执行搜索
  const onSearch = useCallback((query: string) => {
    UserTableRef.current?.setQuery(query);
  }, []);

  /**
   * 手动刷新表格
   * 先设置分页参数为第一页
   * 如果表格当前搜索用户名为空时，直接重新发送请求
   * 如果不为空时，先清除搜索框内容，再清除表格搜索用户名，自动触发发送请求
   */
  const onRefresh = useCallback(() => {
    UserTableRef.current?.setPagenum(1);
    if (UserTableRef.current?.currentQuery === '') {
      UserTableRef.current.getUserListHandler();
    } else {
      UserSearchRef.current?.setSearchQuery('');
      UserTableRef.current?.setQuery('');
    }
  }, []);

  // 新增用户成功后刷新表格
  const onUpdate = useCallback(() => {
    UserTableRef.current?.getUserListHandler();
  }, []);

  return (
    <>
      <header className="flex mb-4">
        <UserSearch ref={UserSearchRef} onSearch={onSearch} />
        <UserRefresh onRefresh={onRefresh} />
        <UserAddModal onUpdate={onUpdate} />
      </header>
      <section>
        <UserTable ref={UserTableRef} />
      </section>
    </>
  );
}

export default User;
