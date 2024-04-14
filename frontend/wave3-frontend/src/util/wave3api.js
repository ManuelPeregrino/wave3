import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ya-jala.vercel.app/',
});

export default api;