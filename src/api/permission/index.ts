import { http } from '@/utils/request';
import { getRoleListResponse } from '@/api/permission/type';

// 获取角色列表
export function getRolesList() {
  return http.get<getRoleListResponse>('roles');
}
