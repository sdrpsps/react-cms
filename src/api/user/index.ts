import { http } from '@/utils/request';
import {
  addUserParams,
  addUserResponse,
  delUserParams,
  delUserResponse,
  getUserListParams,
  getUserListResponse,
  updateUserParams,
  updateUserResponse,
  updateUserStateParams,
  updateUserStateResponse,
} from './types';

// 获取用户列表
export function getUserList(params: getUserListParams) {
  return http.get<getUserListResponse>('users', { params });
}

// 新增用户
export function addUser(params: addUserParams) {
  return http.post<addUserResponse>('users', params);
}

// 删除用户
export function delUser(params: delUserParams) {
  return http.delete<delUserResponse>(`users/${params.id}`);
}

// 修改用户
export function updateUser(params: updateUserParams) {
  return http.put<updateUserResponse>(`users/${params.id}`, params);
}

// 修改用户状态
export function updateUserState(params: updateUserStateParams) {
  return http.put<updateUserStateResponse>(`users/${params.id}/state/${params.type}`);
}
