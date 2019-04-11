import axios from "axios";

const api = axios.create({
  baseURL: "https://omnistack-backend-brz.herokuapp.com"
});

export default api;
