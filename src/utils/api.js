import axios from "axios";

//axios oluşturma
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
  params: {
    language: "tr-TR",
  },
});

export default api;
