import axios from 'axios';

export const createApi = (options = {}) => axios.create(options);

const api = createApi();

export default api;
