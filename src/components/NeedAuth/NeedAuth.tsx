import { Navigate, useLocation } from 'react-router-dom';

const NeedAuth = (props: any) => {
  const auth = JSON.parse(localStorage.getItem('userInfo') || '[]');
  const location = useLocation();
  // 判断是否登陆，是就返回包裹的组件，否则重定向到登陆
  return auth?.token ? props.children : <Navigate to="/login" state={{ preURL: location.pathname }} replace />;
};

export default NeedAuth;
