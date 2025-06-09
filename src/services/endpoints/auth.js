const AUTH_BASE_URL = import.meta.env.VITE_API_GET_USER;

export const auth = {
  login: (uuid) => `${AUTH_BASE_URL}${uuid}`,
};
