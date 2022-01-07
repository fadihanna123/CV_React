import axios, { AxiosResponse } from 'axios';

export const request = {
  get: async <T>(url: string): Promise<AxiosResponse<T, any>> =>
    await axios.get<T>(url),

  post: async <T>(
    url: string,
    data: any,
    headers?: { headers: {} }
  ): Promise<AxiosResponse<T, any>> => await axios.post<T>(url, data, headers),

  put: async <T>(
    url: string,
    data: any,
    headers?: { headers: {} }
  ): Promise<AxiosResponse<T, any>> => await axios.put<T>(url, data, headers),

  delete: async <T>(
    url: string,
    headers?: { headers: {} }
  ): Promise<AxiosResponse<T, any>> => await axios.delete<T>(url, headers),
};
