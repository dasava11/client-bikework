import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const notifySuccess = () => {
    toast.success('¡Operación exitosa!', {
      position: 'top-right',
      autoClose: 3000,
    })
  }

  const notifyError = () => {
    toast.error('¡Ocurrió un error!', {
      position: 'top-right',
      autoClose: 3000,
    })
  }

  return (
    <div className="flex flex-col items-center justify-center bg-primary-400 text-white font-primary min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold text-secondary-400 mb-6">Prueba de Tailwind + Toastify</h1>

      <div className="flex gap-4">
        <button
          onClick={notifySuccess}
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded"
        >
          Mostrar Éxito
        </button>

        <button
          onClick={notifyError}
          className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded"
        >
          Mostrar Error
        </button>
      </div>
    </div>
  )
}

export default App
