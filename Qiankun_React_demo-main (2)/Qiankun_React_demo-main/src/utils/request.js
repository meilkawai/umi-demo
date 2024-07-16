// src/utils/request.js
import axios from 'axios';
import { getDvaApp } from 'umi';

const request = axios.create({
//   baseURL: process.env.REACT_APP_API_BASE_URL,
  baseURL: 'http://localhost:8080/',
  timeout: 10000,
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    const dvaApp = getDvaApp();
    const state = dvaApp._store.getState();
    const token = state.login.token;
    // console.log(token);

    if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
      config.headers.token = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
