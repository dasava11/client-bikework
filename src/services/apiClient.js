import axios from "axios";
import { toast } from "react-toastify";

const MAX_RETRIES = 1;

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_GET_STORES, 
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

/* apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config, response: { status } = {} } = error;

    // Error de autenticación
    if (status === 401) {
      toast("Sesión expirada. Por favor inicia sesión nuevamente.", { type: "error" });
      return Promise.reject(error);
    }

    // Reintento por timeout
    if (error.code === "ECONNABORTED" && config) {
      config.__retryCount = config.__retryCount || 0;

      if (config.__retryCount < MAX_RETRIES) {
        config.__retryCount += 1;
        console.warn(`Timeout. Reintentando ${config.__retryCount}/${MAX_RETRIES}...`);
        return apiClient(config);
      }
   }
    return Promise.reject(error);
  }
); */

export const apiUser = axios.create({
  baseURL: import.meta.env.VITE_API_GET_USER,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});

/* apiUser.interceptors.response.use(
  (response) => response,
  async (error) =>{
    const { config, response: { status } = {} } = error;

    if (status === 401) {
      toast("Sesión expirada. Por favor inicia sesión nuevamente.", { type: "error" });
      return Promise.reject(error);
    }

    if (error.code === "ECONNABORTED" && config) {
      config.__retryCount = config.__retryCount || 0;

      if (config.__retryCount < MAX_RETRIES) {
        config.__retryCount += 1;
        console.warn(`Timeout. Reintentando ${config.__retryCount}/${MAX_RETRIES}...`);
        toast(`Timeout. Reintentando ${config.__retryCount}/${MAX_RETRIES}...`, { type: "warning" });
        return apiUser(config);
      }
    }

    return Promise.reject(error);
  }
)
 */