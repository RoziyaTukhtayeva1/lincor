import axios from "axios";

import { LOGOUT } from "../redux/actions/types";
import { store } from "../redux/store";

const api = axios.create({
  baseURL: "https://api.lincor.uz/api/v1/" || process.env.REACT_APP_API_URL,
  // baseURL: process.env.REACT_APP_API_URL ,
  headers: {
    "Content-Type": "application/json",
    "autharization": process.env.REACT_APP_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFiZjMzY2M3LTA1NmUtNGQ4OC05YTRhLWFiNmU0NWNjNzU1NyIsImVtYWlsIjoiYWhtYWRqb25vdmFrbWFsMDc5QGdtYWlsLmNvbSIsImlhdCI6MTY4MDAwMDUwN30.6glK16zQILN2nw5n4oCmZ4Wcw-rrkYhMl8qHXATJuA0',
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default api;
