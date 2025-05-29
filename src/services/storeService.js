import { apiClient } from "./apiClient"; // Axios configurado con baseURL, interceptors, etc.
import { endpoints } from "./endpoints";

export const fetchStores = async () => {
  const response = await apiClient.get(endpoints.getAll);
  if (response.status !== 200) {
    throw new Error(`API error: ${response.statusText}`);
  }
  if (!response.data || !Array.isArray(response.data)) {
    throw new Error("Datos de tiendas no válidos");
  }
  return response.data;
};
