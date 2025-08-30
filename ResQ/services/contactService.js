import api from './api';

export async function listContacts() {
  const { data } = await api.get('/contacts');
  return data; // [{ id, name, phone }]
}

export async function addContact(contact) {
  const { data } = await api.post('/contacts', contact);
  return data;
}

export async function deleteContact(id) {
  const { data } = await api.delete(`/contacts/${id}`);
  return data;
}
