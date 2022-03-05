import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

export const request = {
  get: async <T>(url: string) => {
    await axios.get<T>(url).catch((error) => {
      if (error.response) {
        toast.error(error.response.data);
        toast.error(error.response.status);
        toast.error(error.response.headers);
      } else if (error.request) {
        toast.error(error.request);
      } else {
        toast.error("Error", error.message);
      }
      toast.error(error.config);
    });
  },

  post: async <T>(url: string, data: any, headers?: { headers: {} }) => {
    await axios.post<T>(url, data, headers).catch((error) => {
      if (error.response) {
        toast.error(error.response.data);
        toast.error(error.response.status);
        toast.error(error.response.headers);
      } else if (error.request) {
        toast.error(error.request);
      } else {
        toast.error("Error", error.message);
      }
      toast.error(error.config);
    });
  },

  put: async <T>(url: string, data: any, headers?: { headers: {} }) => {
    await axios.put<T>(url, data, headers).catch((error) => {
      if (error.response) {
        toast.error(error.response.data);
        toast.error(error.response.status);
        toast.error(error.response.headers);
      } else if (error.request) {
        toast.error(error.request);
      } else {
        toast.error("Error", error.message);
      }
      toast.error(error.config);
    });
  },

  delete: async <T>(url: string, headers?: { headers: {} }) => {
    await axios.delete<T>(url, headers).catch((error) => {
      if (error.response) {
        toast.error(error.response.data);
        toast.error(error.response.status);
        toast.error(error.response.headers);
      } else if (error.request) {
        toast.error(error.request);
      } else {
        toast.error("Error", error.message);
      }
      toast.error(error.config);
    });
  },
};
