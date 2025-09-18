import './GameList.css';

export default function GameList({ games, onDelete }) {
  return (
    <div className="game-list">
      {games.map(game => (
        <div className="game-item" key={game.id}>

          <div className="game-info">
            <div className="game-id">{game.id}</div>
            <div className="game-name">{game.name}</div>
            <div className="game-price">{game.price} ₽</div>
            <div className="game-genre">{game.genre}</div>
          </div>
          <div className="game-actions">
            <button className="btn-delete" onClick={() => onDelete(game.id)}>Удалить</button>
          </div>
        </div>
      ))}
    </div>
  )
}