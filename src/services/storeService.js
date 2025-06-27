import { apiClient } from "./apiClient"; 
import { endpoints } from "./endpoints";

export const fetchStores = async () => {
  const response = await apiClient.get(endpoints.getAll);
  if (response.status !== 200) {
    throw new Error(`API error: ${response.statusText}`);
  }
  if (!response.data || !Array.isArray(response.data)) {
    throw new Error("Datos de tiendas no válidos");
  }
  console.log(response.data);
  return response.data;
};

export const fetchStoreById = async (storeId) => {
  if (!storeId) {
    throw new Error("ID de tienda no encontrado");
  }
  const response = await apiClient.get(endpoints.getByStoreId(storeId));

  if (response.status !== 200) {
    throw new Error(`API error: ${response.statusText}`);
  }
  if (!response.data) {
    throw new Error("Datos de tienda no válidos");
  }
  
  console.log(response.data);
  return response.data;
}
