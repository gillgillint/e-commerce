import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2RkZTJhY2UyNTMxYzA3ZDk4OWMxNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODI5MjU2NywiZXhwIjoxNjQ4NTUxNzY3fQ.xL7jlQQwrefK__YUzMStsbx7jiqXBAI4QSkjAOO8E14';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
