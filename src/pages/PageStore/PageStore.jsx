import Schedule from "../Shedule/Shedule";
import { useParams } from "react-router-dom";
import { useStore } from "../../hooks/useStoreHooks";

const PageStore = () => {
  const { id } = useParams();
 const { store, loading, error } = useStore(id);

  if (loading) return <p>Cargando tienda...</p>;
  if (error) return <p>{error}</p>;
  if (!store) return <p>Tienda no encontrada.</p>;

  return (
    <div>
      <h1>Detalles de la Tienda</h1>
      <h2>{store.name}</h2>
      <p>{store.address}</p>
      <Schedule storeId={store.id} />
    </div>
  );
};

export default PageStore;
