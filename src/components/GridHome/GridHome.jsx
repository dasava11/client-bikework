import { useState, useEffect } from "react"
import axios from "axios"

export const GridHome = () => {
  const [stores, setStores] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const URL = "/api"

  useEffect(() => {
    const fetchStores = async () => {
      setLoading(true)
      try {
        const response = await axios.get(URL)
        setStores(response.data)
        console.log(response.data);
      } catch (error) {
        setError(error.message)
        console.error("Error fetching stores:", error)
        alert("Error fetching stores: " + error.message)
      } finally {
        setLoading(false)
      } 
    }
    
    fetchStores()
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      
    </div>
  )
}
