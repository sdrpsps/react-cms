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
