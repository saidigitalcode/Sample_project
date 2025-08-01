import axios from 'axios';

const api = axios.create({
  baseURL: 'http://sample-django-backend.azurewebsites.net/api/',
});

export default api;
