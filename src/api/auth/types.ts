// 登录传入参数
export interface loginParams {
  username: string;
  password: string;
}

// 登录返回
export interface loginResponse {
  data: loginResponseData;
  meta: loginResponseMeta;
}

export interface loginResponseData {
  email: string;
  id: number;
  mobile: string;
  rid: number;
  token: string;
  username: string;
}

export interface loginResponseMeta {
  msg: string;
  status: number;
}
