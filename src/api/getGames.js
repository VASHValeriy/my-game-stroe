import axios from "axios";

const API_URL = "http://localhost:5129/games";

export const getGames = (id) => axios.get(id ? `${API_URL}/${id}` : API_URL);
export const addGames = (game) => axios.post(API_URL, game);
export const putGames = (id,updatedGame) => axios.put(`${API_URL}/${id}`, updatedGame);
export const deleteGames = (id) => axios.delete(`${API_URL}/${id}`);