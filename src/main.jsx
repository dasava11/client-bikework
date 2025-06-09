import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import "./index.css";
import clsx from "clsx";
import { AuthProvider } from "./context/authContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <App />
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      toastClassName={(context) =>
        clsx(
          "rounded-md px-4 py-3 font-medium shadow-lg transition-all duration-300",
          {
            "bg-success-500 text-white": context?.type === "success",
            "bg-error-500 text-white": context?.type === "error",
            "bg-warning-500 text-black": context?.type === "warning",
            "bg-primary-500 text-white":
            context?.type === "default" || context?.type === "info",
          }
        )
      }
      />
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
