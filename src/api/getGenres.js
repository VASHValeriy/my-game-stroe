import axios from "axios";

const API_URL = "https://gamestore.onrender.com/genres";

export const getGenres = () => axios.get(API_URL);