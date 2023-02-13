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
export interface addUserResponse {
  data: addUserData;
  meta: addUserMeta;
}

export interface addUserData {
  create_time: number;
  email: string;
  id: number;
  mobile: string;
  role_id: number;
  username: string;
}

export interface addUserMeta {
  msg: string;
  status: number;
}
// #endregion
// #endregion

// #region 删除用户
// #region 请求参数
export interface delUserParams {
  id: number;
}
// #endregion
// #region 返回结果
export interface delUserResponse {
  data: null;
  meta: delUserMeta;
}

export interface delUserMeta {
  msg: string;
  status: number;
}
// #endregion
// #endregion

// #region 修改用户
// #region 请求参数
export interface updateUserParams {
  id: string;
  username: string;
  email: string;
  mobile: string;
}
// #endregion

// #region 返回结果
export interface updateUserResponse {
  data: updateUserData;
  meta: updateUserMeta;
}

export interface updateUserData {
  email: string;
  id: number;
  mobile: string;
  role_id: number;
  username: string;
}

export interface updateUserMeta {
  msg: string;
  status: number;
}
// #endregion
// #endregion

// #region 修改用户状态
// #region 请求参数
export interface updateUserStateParams {
  id: number;
  type: boolean;
}
// #endregion

// #region 返回结果
export interface updateUserStateResponse {
  data: updateUserStateData;
  meta: updateUserStateMeta;
}

export interface updateUserStateMeta {
  msg: string;
  status: number;
}

export interface updateUserStateData {
  id: number;
  rid: number;
  username: string;
  mobile: string;
  email: string;
  mg_state: number;
}
// #endregion
// #endregion
