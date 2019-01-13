import callAPI from '../apiCaller';

export const register = (data) => {
  return callAPI('users/register', 'POST', data);
}
