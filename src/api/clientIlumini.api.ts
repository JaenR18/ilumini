/* logica api */
import axios from "axios";

export const clientIlumini = axios.create({
  baseURL: "https://ilumini-api.onrender.com",
});