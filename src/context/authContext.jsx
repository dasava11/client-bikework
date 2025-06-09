import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { getUserByUUID } from "../services/apiUserService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = async () => {
        setLoading(true);
        setError(null);
         console.log("→ Entrando a login()");
        try {
            const userData = await getUserByUUID("uuid-david") // Reemplaza "uuid-david" con el UUID real del usuario;
            console.log("→ Datos recibidos:", userData); 
            console.log("Usuario recibido:", userData);
            setUser(userData);

            toast.success("Bienvenido a BikeWork");
        } catch (err) {
            console.error("→ Error en login:", err);
            console.error("Error al iniciar sesión:", err);
            setError(err.message || "Error al iniciar sesión");
            toast.error("Error al iniciar sesión");
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        toast.info("Has cerrado sesión");
    };
    return (
        <AuthContext.Provider value={{ user, loading, error, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}  

export const useAuth = () => useContext(AuthContext);
