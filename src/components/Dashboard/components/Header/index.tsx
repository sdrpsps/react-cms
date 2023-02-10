import { theme } from 'antd';
import { Header } from 'antd/es/layout/layout';
import CustBreadcrumb from '../Breadcrumb';

function CustHeader() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      {/* 拆分面包屑 */}
      <CustBreadcrumb />
    </Header>
  );
}

export default CustHeader;
