
import { apiUser } from "./apiClient";
import { endpoints } from "./endpoints";

export const getUserByUUID = async (uuid) => {
    try {
         const url = endpoints.login(uuid); // 👈 construyes la URL
    console.log("🔍 URL que se va a consumir:", url); // 👈 la imprimes en consola

        const response = await apiUser.get(endpoints.login(uuid));
        if (!response ) {
            throw new Error("No se recibió respuesta del servidor");
        }
        if (response.status !== 200) {
            throw new Error(`API error: ${response.statusText}`);
        }
        if (!response.data || typeof response.data !== 'object') {
            throw new Error("Datos de usuario no válidos");
        }
        return response.data;
        
    } catch (error) {
        console.error("Error al obtener el usuario:", error);
        throw error; // Re-lanzar el error para manejarlo en el componente 

    }
}