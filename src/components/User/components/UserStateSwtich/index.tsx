import { updateUserState } from '@/api/user';
import { message, Switch } from 'antd';
import { useCallback, useState } from 'react';

interface propsType {
  userID: number;
  checked: boolean;
  onSuccess: () => void;
}

function UserStateSwitch(props: propsType) {
  const [loading, setLoading] = useState(false);
  const onChange = useCallback(async (checked: boolean) => {
    setLoading(true);
    try {
      await updateUserState({ id: props.userID, type: checked });
      message.success('设置成功');
      props.onSuccess()
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Switch
      checkedChildren="启用"
      unCheckedChildren="禁用"
      checked={props.checked}
      onChange={onChange}
      loading={loading}
    />
  );
}

export default UserStateSwitch;
