import { http } from '@/utils/request';
import { loginParams, loginResponse } from './types';

export function login(params: loginParams) {
  return http.post<loginResponse>('login', params);
}
