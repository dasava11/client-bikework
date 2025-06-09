import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  console.log("user en PrivateRoute:", user);

  if (loading) {
    return <p className="text-center mt-10">Cargando...</p>;
  }

  if (!user && !loading) {
    return <Navigate to="/" replace />; 
  }

  return children; // Muestra el contenido protegido
};

export default PrivateRoute;
