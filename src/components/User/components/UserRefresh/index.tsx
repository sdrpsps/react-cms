import { SyncOutlined } from '@ant-design/icons';
import { Button } from 'antd';

interface propsType {
  onRefresh: () => void;
}

function UserRefresh(props: propsType) {
  return (
    <Button type="primary" icon={<SyncOutlined />} onClick={() => props.onRefresh()} className="mr-4">
      刷新表格
    </Button>
  );
}

export default UserRefresh;
