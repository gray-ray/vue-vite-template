
/**
 * @description axios 请求在封装
 */

import axios, {AxiosInstance} from 'axios';

const instance: AxiosInstance = axios.create({ 
  baseURL: import.meta.env.BASE_URL,
  timeout: 6000,
  withCredentials: true, // default
});



const request = (url: string, options: {data?: Record<string, any>,method: string, [prop: string]: any} ) => {

  const { params = undefined,  data = undefined, method='GET', ...reset } = options;


  instance.interceptors.request.use((config) => {
    // TODO: 请求头
    return config;
  }, () => {
    return Promise.reject('异常');
  });

  instance.interceptors.response.use((res) => {
    // TODO: 用户登录 、权限处理
    return res?.data;
  }, () => {
    return Promise.reject('异常');
  });

  return instance({
    url,
    method,
    data,
    params,
    ...reset
  }).then(res => {
    return res;
  });


};





export default request;