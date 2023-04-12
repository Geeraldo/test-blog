import axios from 'axios';

const baseApi = `https://jsonplaceholder.typicode.com`;
const instance = axios.create({
  baseURL: baseApi,
});

export const apiClient = instance;
