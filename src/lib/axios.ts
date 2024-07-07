// src/lib/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "X-Requested-With": "XMLHttpRequest",
  },
});

export default api;
