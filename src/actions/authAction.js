import callAPI from '../apiCaller';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const EPXIRE_DAY = 24;

export const login = (data, history) => {
  const res = callAPI('auth/login', 'POST', data);
  res.then(res => {
    _setCookieToken(res.data.token);
    history.push('/product');
  });
  return res;
}

const _setCookieToken = (token) => {
  let d = new Date();
  d.setTime(d.getTime() + (EPXIRE_DAY*60*60*1000));
  cookies.set("token", token, {path: "/", expires: d});
};

export const getToken = () => {
  return cookies.get('token');
}

export const isAuth = () => {
  return cookies.get('token') ? true : false;
}

export const removeToken = () => {
  cookies.remove('token');
}
