import { useState, useEffect } from "react";
import { getGames, addGames, putGames, deleteGames } from "../api/getGames";
import { getGenres } from "../api/getGenres";

export const useGameStore = () => {

    const [genres, setGenres] = useState([]);
    const [games, setGames] = useState([]);
    const [search, setSearch] = useState({
        id: "",
        name: "",
        genre: ""
    });

    // Загрузка всех игр и жанров
    useEffect(() => {
        fetchGames();
        fetchGenres();
    }, []);

    useEffect(() => {
        handleSearch(search);
    }, [search]);

    // Получаем список игр
    const fetchGames = () => {
        getGames().then(response => setGames(response.data)).catch(err => console.error(err));
    }

    const fetchGenres = () => {
        getGenres().then(res => setGenres(res.data)).catch(err => console.error(err));
    }

    // Добавление игры
    const addGame = (game) => {
        addGames(game).then(() => fetchGames()).catch(err => console.error(err));
    }

    const updateGame = (id, updatedGame) => {
        putGames(id, updatedGame).then(() => fetchGames()).catch(err => console.error(err));
    }

    const deleteGame = (id) => {
        deleteGames(id).then(() => fetchGames()).catch(err => {
            console.error("addGames error", err.response ? err.response.data : err);
        });
    }

    // Фильтрованные игры
    const handleSearch = async (filters) => {
        const { id, name, genre } = filters;

        try {
            let response = await getGames();
            let data = response.data;
            if (id) {

                data = data.filter(g => g.id.toString().startsWith(id.toString()));

                // // Если указан ID, ищем конкретную игру
                // response = await getGames(id);
                // response.data = [response.data];
            }

            // Локальная фильтрация
            if (name) {
                data = data.filter(g => g.name.toLowerCase().includes(name.toLowerCase()));
            }
            if (genre) {
                data = data.filter(g => g.genreId === Number(genre));
            }
            response.data = data;

            const enriched = data.map(g => {
                const foundGenre = genres.find(gen => gen.id === g.genreId);
                return { ...g, genre: foundGenre ? foundGenre.name : "Неизвестно" };
            });

            setGames(response.data);
        } catch (err) {
            console.error("Ошибка поиска:", err);
        }
    };


    return { games, genres, addGame, updateGame, deleteGame, handleSearch, search, setSearch };

}