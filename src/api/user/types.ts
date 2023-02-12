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

// #region 新增用户
// #region 请求参数
export interface addUserParams {
  username: string;
  password: string;
  email: string;
  mobile: string;
}
// #endregion

// #region 返回结果
export interface AddUserResponse {
  data: AddUserData;
  meta: AddUserMeta;
}

export interface AddUserData {
  create_time: number;
  email: string;
  id: number;
  mobile: string;
  role_id: number;
  username: string;
}

export interface AddUserMeta {
  msg: string;
  status: number;
}
// #endregion
// #endregion
