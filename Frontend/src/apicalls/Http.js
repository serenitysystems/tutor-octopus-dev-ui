import axios from "axios";
// import { getToken } from "./auth";

const Axios = axios.create({
  baseURL:'http://localhost:8080',
  headers: {
    "Content-Type": "application/json",
  },
});

Axios.interceptors.request.use(
  (config) => {
    // const token = sessionStorage.getItem('token')
    // config.headers = {
    //   ...config.headers,
    //   Authorization: `PANKAJ ${token? token : ""}`,
    // };
    console.log(config)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export class HttpClient {
  static async get(url, params) {
    const { data } = await Axios.get(url, { params });
    return data;
  }

  static async post(url, info, options) {
    const { data } = await Axios.post(url,info,options);
    return data;
  }

  static async put(url, info) {
    const { data } = await Axios.put(url, info);
    return data;
  }

  static async delete(url,info) {
    const { data } = await Axios.delete(url,info);
    return data;
  }
  static async patch(url, info) {
    try {
      console.log(info);
      console.log(Axios)
      const response = await Axios.patch(url, info);
      console.log(response);
      return response;
    } catch (error) {
      console.error('Error while making PATCH request:', error);
      throw error; // Re-throw the error to propagate it to the caller
    }
  }
  
}