import api from './api';

export async function triggerSOS(payload) {
  // payload: { location, contacts }
  const { data } = await api.post('/emergency/sos', payload);
  return data;
}

export async function getAlerts() {
  const { data } = await api.get('/emergency/alerts');
  return data;
}
