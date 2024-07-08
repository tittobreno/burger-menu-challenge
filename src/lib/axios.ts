import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
  },
});

export default api;
