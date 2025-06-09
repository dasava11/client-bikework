import { toast } from "react-toastify";
import clsx from "clsx";

export const ToastButton = ({ label, type, message, themeColor, onClick }) => {
  const showToast = (e) => {
    toast[type](message, {
      position: "top-right",
      autoClose: 3000,
    });
     if (onClick) onClick(e);
  };
  const baseClasses =
    "text-white font-bold py-2 px-4 rounded transition-colors duration-200";

  const colorThemeBg = {
    primary: "bg-primary-500 hover:bg-primary-600",
    secondary: "bg-secondary-500 hover:bg-secondary-600 text-black",
    success: "bg-success-500 hover:bg-success-600",
    error: "bg-error-500 hover:bg-error-600",
    warning: "bg-warning-500 hover:bg-warning-600 text-black",
    accent: "bg-accent-500 hover:bg-accent-600",
    gray: "bg-gray-500 hover:bg-gray-600",
  };

  return (
    <button
      onClick={showToast}
      className={clsx(baseClasses, colorThemeBg[themeColor])}
    >
      {label}
    </button>
  );
};


 {/* Al importar en otro componente así se pasarian las props: 
         <ToastButton
          label="Confirmar"
          type="success"
          message="¡Operación exitosa!"
          themeColor="success"
        /> 
  */}