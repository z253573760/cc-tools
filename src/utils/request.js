import axios from "axios";

axios.defaults.baseURL = "/api";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么

    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);
export default axios;
