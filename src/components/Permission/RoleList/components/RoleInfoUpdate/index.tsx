import React from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';

function RoleInfoUpdate() {
  return (
    <Button type="primary" icon={<EditOutlined />}>
      修改信息
    </Button>
  );
}

export default RoleInfoUpdate;
