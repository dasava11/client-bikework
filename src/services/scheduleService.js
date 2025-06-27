import apiClient from "./apiClient";
import { endpoints } from "./endpoints";

export const fetchScheduleByStoreId = async (storeId) => {
  if (!storeId) throw new Error("No se recibió un ID de tienda");

  const response = await apiClient.get(`${endpoints.getScheduleByStoreId}/${storeId}`);

  if (response.status !== 200) {
    throw new Error(`Error en el servidor: ${response.statusText}`);
  }

  if (!response.data || !Array.isArray(response.data)) {
    throw new Error("Datos de horario inválidos");
  }

  return response.data;
};