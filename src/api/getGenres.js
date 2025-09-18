import axios from "axios";

const API_URL = "http://localhost:5129/genres";

export const getGenres = () => axios.get(API_URL);