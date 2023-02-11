import { Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

function Permission() {
  const navigate = useNavigate();

  return (
    <Space>
      <Button type="dashed" onClick={() => navigate('/permission/roleList')}>
        进入角色列表
      </Button>
      <Button type="dashed" onClick={() => navigate('/permission/rightList')}>
        进入权限列表
      </Button>
    </Space>
  );
}

export default Permission;
