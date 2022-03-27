import { publicRequest } from '../../requestMethod';

const login = async (userData) => {
  const res = await publicRequest.post('/auth/login', userData);

  if (res.data) {
    localStorage.setItem('user', JSON.stringify(res.data));
  }

  return res.data;
};

const register = async (userData) => {
  const res = await publicRequest.post('/auth/register', userData);

  if (res.data) {
    localStorage.setItem('user', JSON.stringify(res.data));
  }

  return res.data;
};
const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('persist:root');
};

const authService = {
  login,
  register,
  logout,
};

export default authService;
