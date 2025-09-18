import React, { useState } from "react";

import './GameForm.css';

export default function GameForm({ onAdd, genres }) {

    // Новая игра для добавления
    const [newGame, setNewGame] = useState({
        name: "",
        genre: "",
        price: "",
    });

    const handleSubmit = () => {
        const priceNum = Number(newGame.price);
        if (isNaN(priceNum)) {
            alert("Цена должна быть числом");
            return;
        }

        const gameToSend = {
            Name: newGame.name || "Без названия",
            GenreId: newGame.genre ? Number(newGame.genre) : 1,
            Price: priceNum,
        };
        onAdd(gameToSend);

        setNewGame({
            name: "",
            price: "",
            genre: ""
        })
    };

    return (
        <div className="game-form">
            <div className="game-form_inputs">
                <h2> Добавить игру </h2>
                <input
                    className="game-form__input"
                    placeholder="Название"
                    value={newGame.name}
                    onChange={
                        e => setNewGame({ ...newGame, name: e.target.value })
                    }
                />
                <input
                    className="game-form__input"
                    placeholder="Цена"
                    value={newGame.price}
                    onChange={
                        e => setNewGame({ ...newGame, price: e.target.value })
                    }
                />
                <select
                    className="game-form__select"
                    placeholder="Genre"
                    value={newGame.genre}
                    onChange={
                        e => setNewGame({
                            ...newGame, genre: e.target.value
                        })
                    }
                    style={{ color: newGame.genre ? "#000" : "#7b7b7b" }}
                >
                    <option value="" disabled hidden>Выберите жанр...</option>
                    {genres.map(g => (
                        <option key={g.id} value={g.id}>
                            {g.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="game-form__button-wrapper">
                <button className="game-form__button" onClick={handleSubmit}> Добавить </button>
            </div>

        </div >
    )
}