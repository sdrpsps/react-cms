import { useEffect } from 'react';

const useAutoLogout = () => {
  // 登陆状态自动登出校验
  const expirationTime = Number(localStorage!.getItem('expirationTime'));
  useEffect(() => {
    const timeOut = expirationTime - Date.now();
    // 剩余不足一分钟时退出登录
    if (timeOut < 60000) {
      // 退出操作
      localStorage.clear();
    }
    // 设置定时器
    const timer = setTimeout(() => {
      // 退出操作
      localStorage.clear();
    }, timeOut);
    return () => {
      // 清除上一个定时器
      clearTimeout(timer);
    };
  }, []);
};

export default useAutoLogout;
