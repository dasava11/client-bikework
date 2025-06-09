import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_GET_STORES, 
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiUser = axios.create({
  baseURL: import.meta.env.VITE_API_GET_USER,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});
