import { message as Message, Modal } from 'antd';
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

// 创建 axios 实例
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
    if (userInfo.token) {
      config.headers.Authorization = `${userInfo.token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    Message.error(error.message);
    return Promise.reject(error);
  },
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 根据自定义错误码判断请求是否成功
    const { meta } = response.data;
    if (meta.status === 200 || meta.status === 201) {
      // 将组件用的数据返回
      return response.data;
    } else if (meta.status === 400 && meta.message === '无效token') {
      Modal.warning({
        title: '登录过期',
        content: '请重新登录...',
        onOk: () => {
          localStorage.removeItem('userInfo'); // 清除 localStorage
          location.reload(); // 强制刷新页面
        },
      });
    } else {
      // 处理业务错误。
      Message.error(meta.msg);
      return Promise.reject(new Error(meta.msg));
    }
  },
  (error: AxiosError) => {
    // 处理 HTTP 网络错误
    let message = '';
    // HTTP 状态码
    const status = error.response?.status;
    switch (status) {
      case 401:
        message = 'token 失效，请重新登录';
        // 这里可以触发退出的 action
        break;
      case 403:
        message = '拒绝访问';
        break;
      case 404:
        message = '请求地址错误';
        break;
      case 500:
        message = '服务器故障';
        break;
      default:
        message = '网络故障';
    }
    Message.error(message);
    return Promise.reject(error);
  },
);

// 导出封装的请求方法
export const http = {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.get(url, config);
  },

  post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return service.post(url, data, config);
  },

  put<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return service.put(url, data, config);
  },

  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.delete(url, config);
  },
};

/* 导出 axios 实例 */
export default service;
