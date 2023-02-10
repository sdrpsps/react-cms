import axios from 'axios';
import { message as Message } from 'antd';
import type { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

// 创建 axios 实例
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
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
    } else {
      // 处理业务错误。
      Message.error(meta.message);
      return Promise.reject(new Error(meta.message));
    }
  },
  (error: AxiosError) => {
    const { meta } = error.response?.data as any;
    Message.error(JSON.stringify(meta.message));
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
