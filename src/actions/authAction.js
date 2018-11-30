import callAPI from '../apiCaller';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const EPXIRE_DAY = 1;

export const login = (data, history) => {
  const res = callAPI('auth/login', 'POST', data);
  res.then(res => {
    _setCookieToken(res.data.token, () => {
      history.push('/product');
    }) ;
  });
  return res;
}

const _setCookieToken = (token, callback) => {
  let d = new Date();
  d.setTime(d.getTime() + (EPXIRE_DAY*60*60*1000));
  cookies.set("token", token, {path: "/", expires: d});
  return callback();
};

export const getToken = () => {
  return cookies.get('token') ? cookies.get('token') : null;
}

export const isAuth = () => {
  return cookies.get('token') ? true : false;
}
