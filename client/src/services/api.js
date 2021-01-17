import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

api.interceptors.request.use((config) => {
  if (localStorage.token) {
    config.headers.common['x-auth-token'] = localStorage.token;
  } else {
    delete config.headers.common['x-auth-token'];
  }
  return config;
});

export default api;
