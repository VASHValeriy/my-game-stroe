import './App.css';
import './components/GameForm.css'
import './components/GameList.css'

import { useGameStore } from "./hooks/useGameStore";
import GameForm from './components/GameForm';
import GameSearch from './components/GameSearch';
import GameList from './components/GameList';

function App() {

  const { games, genres, addGame, updateGame, deleteGame, handleSearch, search, setSearch } = useGameStore();


  return (
    <div className="App">
      <div className="flex">
        <GameForm onAdd={addGame} genres={genres} />
        {/* Форма поиска */}
        <GameSearch
          search={search}
          setSearch={setSearch}
          genres={genres}
          onSearch={handleSearch}
        />
      </div>
      {/* Список игр */}
      <div className="game-list">
        <div className="game-item">
          <div className="game-info">
            <div className="game-id bold">ID </div>
            <div className="game-name bold">Название</div>
            <div className="game-price bold">Цена ₽</div>
            <div className="game-genre bold center">Жанр</div>
          </div>
          <div className="game-actions">
            <div className="category bold">Удалить</div>
          </div>
        </div>
      </div>
      <GameList
        games={games}
        onUpdate={updateGame}
        onDelete={deleteGame}
      />
    </div>
  );
}

export default App;
