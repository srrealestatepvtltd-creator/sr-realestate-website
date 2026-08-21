import axios from "axios";

const API = axios.create({
  baseURL: "https://sr-realestate-website-backend.onrender.com/api",
});

export default API;