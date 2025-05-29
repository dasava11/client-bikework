import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { fetchStores } from "../services/storeService";

export const useStores = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadStores = async () => {
      setLoading(true);
      try {
        const data = await fetchStores();
        if (isMounted) setStores(data);
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          toast.error(`Error al cargar tiendas: ${err.message}`);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadStores();

    return () => {
      isMounted = false;
    };
  }, []);

  return { stores, loading, error };
};
