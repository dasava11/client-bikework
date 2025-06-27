import { useStores } from "../../hooks/useStoreHooks";
import CardStore from "../CardStore/CardStore";

export const GridHome = () => {
  const { stores, loading, error } = useStores();

  console.log(stores)

  if (loading) return <p className="text-primary-600">Cargando tiendas...</p>;
  if (error) return <p className="text-error-500">Error: {error}</p>;
  if (stores.length === 0)
    return <p className="text-gray-500">No hay tiendas disponibles.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {stores.map((store) => (
        <CardStore key={store.id} store={store} />
      ))}
    </div>
  );
};
