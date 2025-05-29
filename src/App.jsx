import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { GridHome } from './components/GridHome/GridHome'

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
    <div className="flex flex-col items-center justify-center bg-primary-500 text-white font-primary min-h-screen text-center px-4">
    <GridHome/>
    </div>
  )
}

export default App
