import axios, { AxiosResponse } from "axios";
import { Flip, toast } from "react-toastify";

const request = async (
  url: string,
  method?: any,
  redata?: any,
  headers?: {}
): Promise<any> => {
  let data: AxiosResponse<any> | undefined;
  try {
    if (method === "get") {
      data = await axios.get(url, headers);
    } else if (method === "post") {
      data = await axios.post(url, redata, headers);
    } else if (method === "put") {
      data = await axios.put(url, redata, headers);
    } else if (method === "delete") {
      data = await axios.delete(url, headers);
    } else {
      data = await axios.get(url);
    }
    return data!.data;
  } catch (error) {
    toast.error((error as Error).message, { transition: Flip });
  }
};

export { request };
