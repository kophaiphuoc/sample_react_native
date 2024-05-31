import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import {toastNofication} from '../functionsystem/ShowToast';
import {getDataStringLocal} from '../functionsystem/LocalStorage';
import {nextScreen} from '../funcfeature/Navigation';
import {checkIsEmpty} from '../funcfeature/CheckString';

const BASE_URL_DOMAIN = process.env.BASE_URL;
let DOMAIN_OPS = '';

export const setDomain = (domain: string) => {
  DOMAIN_OPS = domain;
  initApiInstance();
};

const statusHandlers: Record<number, () => void> = {
  400: () => {
    console.error('Bad Request');
  },
  500: () => {
    console.error('Internal Server Error');
  },
  401: () => {
    nextScreen('LoginScreen');
    console.error('Unauthorized');
  },
  402: () => {
    console.error('Payment Required');
  },
  403: () => {
    nextScreen('LoginScreen');
    console.error('Forbidden');
  },
  405: () => {
    console.error('Method Not Allowed');
  },
};

const initApiInstance = () => {
  api.defaults.baseURL = checkIsEmpty(DOMAIN_OPS)
    ? BASE_URL_DOMAIN
    : DOMAIN_OPS;
};

const api: AxiosInstance = axios.create({
  baseURL: checkIsEmpty(DOMAIN_OPS) ? BASE_URL_DOMAIN : DOMAIN_OPS,
  timeout: 10000,
  headers: {
    'content-type': 'application/json',
    'Accept-Language': 'vi',
  },
});

api.interceptors.request.use(
  async (
    config: InternalAxiosRequestConfig<any>,
  ): Promise<InternalAxiosRequestConfig<any>> => {
    const token = await getDataStringLocal('token');
    if (token) {
      config.headers.Authorization = token;
    }
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
      const message =
        error?.response?.data?.message + '' || 'Lỗi không xác định';
      toastNofication(message);
      const statusHandler = statusHandlers[statusCode];
      if (statusHandler) {
        statusHandler();
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

export const uploadFileApi = async (url: string, file: File) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    const response = await api.post(url, formData, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
