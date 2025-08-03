import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-server.azurewebsites.net/api/',
});

export default api;
