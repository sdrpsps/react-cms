// #region 获取用户列表
// #region 获取用户列表参数
export interface getUserListParams {
  query: string;
  pagenum: number;
  pagesize: number;
}
// #endregion

// #region 获取用户列表返回结果
export interface getUserListResponse {
  data: getUserListData;
  meta: getUserListMeta;
}

export interface getUserListData {
  pagenum: number;
  total: number;
  users: User[];
}

export interface User {
  create_time: number;
  email: string;
  id: number;
  mg_state: boolean;
  mobile: string;
  role_name: string;
  username: string;
}

export interface getUserListMeta {
  msg: string;
  status: number;
}
// #endregion
// #endregion
