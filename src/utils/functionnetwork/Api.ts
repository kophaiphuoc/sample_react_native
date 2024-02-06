import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

import {BASE_URL_DOMAIN} from '../../config';

const statusHandlers: Record<number, () => void> = {
  400: () => {
    console.error('Bad Request');
  },
  500: () => {
    console.error('Internal Server Error');
  },
  401: () => {
    console.error('Unauthorized');
  },
  402: () => {
    console.error('Payment Required');
  },
  403: () => {
    console.error('Forbidden');
  },
  405: () => {
    console.error('Method Not Allowed');
  },
};

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL_DOMAIN,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    //...
  },
});

api.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  error => {
    if (error.response) {
      const statusCode = error.response.status;
      const statusHandler = statusHandlers[statusCode];
      if (statusHandler) {
        statusHandler();
      } else {
        console.log('Other Error:', statusCode);
      }
    }
    return Promise.reject(error);
  },
);

export const get = async (url: string, params?: any) => {
  try {
    const response = await api.get(url, {params});
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const post = async (url: string, data?: any, params?: any) => {
  try {
    const response = await api.post(url, data, {params});
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const put = async (url: string, data?: any, params?: any) => {
  try {
    const response = await api.put(url, data, {params});
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const patch = async (url: string, data?: any, params?: any) => {
  try {
    const response = await api.patch(url, data, {params});
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const remove = async (url: string, params?: any) => {
  try {
    const response = await api.delete(url, {params});
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
