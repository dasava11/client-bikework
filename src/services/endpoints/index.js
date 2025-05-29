import * as stores from "./stores";
import * as auth from "./auth";

export const endpoints = {
  ...stores.stores,
  ...auth.auth,
};
