import { apiClient } from '../../common/services/apiClient.js';



export const listPost = () =>
  apiClient.get(`post`);
