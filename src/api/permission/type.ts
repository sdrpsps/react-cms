// region 角色列表
export interface getRoleListResponse {
  data: roleListDatum[];
  meta: roleListMeta;
}

export interface roleListDatum {
  children?: roleListDatumChild[];
  id: number;
  roleDesc: string;
  roleName: string;
}

export interface roleListDatumChild {
  authName: string;
  children?: roleListDatumChild[];
  id: number;
  path: string;
}

export interface roleListMeta {
  msg: string;
  status: number;
}

// endregion
// region 删除角色
export interface deleteRoleResponse {
  data: null;
  meta: deleteRoleMeta;
}

export interface deleteRoleMeta {
  msg: string;
  status: number;
}

export interface deleteRoleParams {
  id: number;
}

// endregion
