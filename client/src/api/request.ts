import axios from 'axios';
import { apiKey, backendURL } from '@utils/envs';

const globalHeader: ContentTypeHeaders = 'application/json';

axios.defaults.baseURL = backendURL;
axios.defaults.headers.common['Content-Type'] = globalHeader;
axios.defaults.headers.common.apiKey = apiKey;

export const request = {
  get: async <T>(url: Paths) => {
    return await axios.get<T>(url);
  },

  post: async <T>(
    url: Paths,
    data: unknown,
    headers?: { headers: Record<string, never> }
  ) => await axios.post<T>(url, data, headers),

  put: async <T>(
    url: Paths,
    data: unknown,
    headers?: { headers: Record<string, never> }
  ) => {
    await axios.put<T>(url, data, headers);
  },

  delete: async <T>(
    url: Paths,
    headers?: { headers: Record<string, never> }
  ) => {
    await axios.delete<T>(url, headers);
  },
};
