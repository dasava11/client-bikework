import "react-toastify/dist/ReactToastify.css";
import MyRoutes from "./routes/routes";

function App() {
  return (
    <div className="flex flex-col items-center justify-center bg-primary-100 text-white font-primary min-h-screen text-center px-4">
    {/*  <header className="mb-8">
      
     </header> */}
      <MyRoutes />
    </div>
  );
}

export default App;
