import { useStores } from "../../hooks/useStores";

export const GridHome = () => {
  const { stores, loading, error } = useStores();

  if (loading) return <p className="text-primary-600">Cargando tiendas...</p>;
  if (error) return <p className="text-error-500">Error: {error}</p>;
  if (stores.length === 0)
    return <p className="text-gray-500">No hay tiendas disponibles.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {stores.map((store) => (
        <div
          key={store.id}
          className="p-4 rounded-lg shadow-md bg-white text-black"
        >
          <h3 className="font-bold text-lg">{store.name}</h3>
          <p className="text-sm text-gray-600">{store.description}</p>
        </div>
      ))}
    </div>
  );
};
