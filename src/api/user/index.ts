import { http } from '@/utils/request';
import { addUserParams, AddUserResponse, getUserListParams, getUserListResponse } from './types';

export function getUserList(params: getUserListParams) {
  return http.get<getUserListResponse>('users', { params });
}

export function addUser(params: addUserParams) {
  return http.post<AddUserResponse>('users', params);
}
