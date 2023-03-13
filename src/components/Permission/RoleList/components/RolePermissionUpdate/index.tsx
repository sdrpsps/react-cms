import React from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';

function RolePermissionUpdate() {
  return (
    <Button type="primary" icon={<EditOutlined />}>
      修改权限
    </Button>
  );
}

export default RolePermissionUpdate;
