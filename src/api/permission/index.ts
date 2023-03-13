import { http } from '@/utils/request';
import { getRoleListResponse, deleteRoleParams, deleteRoleResponse } from './type';

// 获取角色列表
export function getRolesList() {
  return http.get<getRoleListResponse>('roles');
}

// 删除角色
export function deleteRole(params: deleteRoleParams) {
  return http.delete<deleteRoleResponse>(`roles/${params.id}`);
}
