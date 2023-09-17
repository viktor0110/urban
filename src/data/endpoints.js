import { del, get, post, put } from './api.js';

const endpoints = {
  tattoos: '/data/tattoos',
  upload: '/data/upload'
};

export async function getTattoos() {
  return await get(endpoints.tattoos);
}

export async function createTattoo(data) {
  return await post(endpoints.upload, {
    data });
}

export async function getTattooById(id) {
  return await get(`${endpoints.tattoos}/${id}`);
}

export async function deleteTattoo(id) {
  return await del(`${endpoints.tattoos}/${id}`);
}

export async function editTattoo(tattoo, id) {
  return await put(`${endpoints.tattoos}/${id}`, {
    imageUrl: animal.imageUrl,
  });
}


