import axios from 'axios';

const api = axios.create({
  baseURL: 'http://backend-server.azurewebsites.net/api/',
});

export default api;
