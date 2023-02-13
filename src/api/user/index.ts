import { http } from '@/utils/request';
import { addUserParams, AddUserResponse, delUserParams, DelUserResponse, getUserListParams, getUserListResponse } from './types';

// 获取用户列表
export function getUserList(params: getUserListParams) {
  return http.get<getUserListResponse>('users', { params });
}

// 新增用户
export function addUser(params: addUserParams) {
  return http.post<AddUserResponse>('users', params);
}

// 删除用户
export function delUser(params: delUserParams) {
  return http.delete<DelUserResponse>(`users/${params.id}`);
}
