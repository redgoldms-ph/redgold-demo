import axios from 'axios';

export const API_URL = `${import.meta.env.VITE_API_URL}`;

const axiosInstance = axios.create({
  timeout: 15000,
  baseURL: API_URL
});

// Add an interceptor for handling token or other headers

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add any logic before sending the request
    // For example, you can attach a token to the headers here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Add any logic for handling errors
    // console.log(error);
    return Promise.reject(error);
  }
);

export const api = {
  login          : (data) =>  axiosInstance.post('login',data),
};