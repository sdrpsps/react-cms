import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';

function CustBreadcrumb() {
  const breadcrumbNameMap: Record<string, string> = {
    '/user': '用户管理',
    '/permission': '权限管理',
    '/permission/roleList': '角色管理',
    '/permission/rightList': '权限管理',
  };
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">主页</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return <Breadcrumb className="ml-8 h-16 flex items-center">{breadcrumbItems}</Breadcrumb>;
}

export default CustBreadcrumb;
