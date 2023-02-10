import { http } from '@/utils/request';
import { getUserListParams, getUserListResponse } from './types';

export function getUserList(params: getUserListParams) {
  return http.get<getUserListResponse>('users', { params });
}
