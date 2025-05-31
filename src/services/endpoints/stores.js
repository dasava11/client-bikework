const GET_STORES = import.meta.env.VITE_API_GET_STORES;

export const stores = {
  getAll: `${GET_STORES}/storesWithData`,
  getByStoreId: (id) => `${GET_STORES}/stores/${store_id}`,
  create: `${GET_STORES}/stores`,
  update: (id) => `${GET_STORES}/stores/${id}`,
  delete: (id) => `${GET_STORES}/stores/${id}`,
};
