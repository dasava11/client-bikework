import "react-toastify/dist/ReactToastify.css";
import { GridHome } from "./components/GridHome/GridHome";
import { ToastButton } from "./components/ToastButtons/ToastButton";

function App() {
  return (
    <div className="flex flex-col items-center justify-center bg-primary-100 text-white font-primary min-h-screen text-center px-4">
      <div className="mt-4 flex gap-4">
        <ToastButton
          label="Confirmar"
          type="success"
          message="¡Operación exitosa!"
          themeColor="success"
        />
        <ToastButton
          label="Eliminar"
          type="error"
          message="Elemento eliminado correctamente"
          themeColor="error"
        />
      </div>
      <GridHome />
    </div>
  );
}

export default App;
