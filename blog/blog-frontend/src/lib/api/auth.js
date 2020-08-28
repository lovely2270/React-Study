import client from './client';

//로그인
export const login = ({ usernsme, password }) =>
  client.post('/api/auth/login', { usernsme, password });

//회원가입
export const register = ({ usernsme, password }) =>
  client.post('/api/auth/register', { usernsme, password });

//로그인 상태 확인
export const check = () => client.get('api/auth.check');
