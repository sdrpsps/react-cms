import { Breadcrumb } from 'antd';

function CustBreadcrumb() {
  return (
    <Breadcrumb className='ml-8 h-16 flex items-center'>
      <Breadcrumb.Item>User</Breadcrumb.Item>
      <Breadcrumb.Item>Bill</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default CustBreadcrumb;
