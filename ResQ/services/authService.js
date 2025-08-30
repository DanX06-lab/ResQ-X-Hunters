import api from './api';

export async function login({ username, password }) {
  // Replace with real endpoint
  const { data } = await api.post('/auth/login', { username, password });
  return data; // { token, user }
}

export async function signup({ email, password }) {
  const { data } = await api.post('/auth/signup', { email, password });
  return data;
}

export async function me(token) {
  const { data } = await api.get('/auth/me', { headers: { Authorization: `Bearer ${token}` } });
  return data; // { user }
}
