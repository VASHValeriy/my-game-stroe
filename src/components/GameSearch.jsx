
import './GameForm.css';

export default function GameSearch({ search, setSearch, genres, onSearch }) {
    return (
        <div className="game-form">
            <div className="game-form_inputs">
            <h2> Найти игру </h2>
                
                <input
                    className="game-form__button"
                    placeholder=" Поиск по ID "
                    value={search.id ?? ""}
                    onChange={
                        e => setSearch({
                            ...search, id: e.target.value
                        })
                    }
                />
                <input
                    className="game-form__button"
                    placeholder=" Поиск по названию "
                    value={search.name ?? ""}
                    onChange={
                        e => setSearch({
                            ...search, name: e.target.value
                        })
                    }
                />
                <select
                    className="game-form__select"
                    placeholder=" Поиск по жанру "
                    value={search.genre ?? ""}
                    onChange={
                        e => setSearch({
                            ...search, genre: e.target.value
                        })
                    }
                    style = {{ color: search.genre ? "#000" : "#7b7b7b"}}
                    >
                    <option value="" disabled hidden> Выбиретие жанр...</option>
                        {genres.map(g =>
                            <option key={g.id} value={g.id}>
                                {g.name}
                            </option>
                        )}
                </select>
            </div>
            <div className="game-form__button-wrapper">
                <button className="game-form__button" 
                    onClick={() => {
                        setSearch({ id: "", name:"", price: "", genre: ""});
                        onSearch({id: "", name: "", price: "", genre: ""});
                    }}
                    > Сбросить </button>
            </div>
        </div>
    );
}