import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { fetchStores, fetchStoreById } from "../services/storeService";

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
         console.log('entra 2');
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

export const useStore = (id) => {
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    let isMounted = true;

    const loadStore = async () => {
      setLoading(true);
      try {
        const data = await fetchStoreById(id);
        if (isMounted) setStore(data);
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          toast.error(`Error al cargar tienda: ${err.message}`);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadStore();

    console.log(`ID de la tienda desde useStore: ${id}`);
    
    return () => {
      isMounted = false;
    };
    
  }, [id]);

  return { store, loading, error };
};
