import { useEffect } from "react";
import { ToastButton } from "../../components/ToastButtons/ToastButton";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { login, user } = useAuth();
    const navigate = useNavigate();

useEffect(() => {
  if (user) {
    navigate("/home_stores");
  }
}, [user, navigate]);

    const handleLogin = async () => {
    try {
        await login(); 
        console.log("Login exitoso. Redirigiendo...");
    } catch (error) {
        console.error("Fallo en el login:", error);
    }
};

    return(
        <div className="login-page">
            <header className="mb-8">
                <h1 className="text-4xl font-bold mb-2">Bienvenido a Bike Work</h1>
                <p className="text-lg">Tu plataforma de confianza para mantenimiento y servicios de bicicletas</p>
            </header>
            <div className="login-form"> 
                <ToastButton
                    label="Iniciar sesión"
                    type="success"
                    message="¡Bienvenido!"
                    themeColor="success"
                    onClick={()=> handleLogin()} 
                />
            </div>
        </div>
    )
}

export default Login;