import { theme } from 'antd';
import { Header } from 'antd/es/layout/layout';

function CustHeader() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return <Header style={{ padding: 0, background: colorBgContainer }} />;
}

export default CustHeader;
