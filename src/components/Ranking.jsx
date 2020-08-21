import React from 'react';
import { Link } from 'react-router-dom';

const Ranking = () => {
  const ranking = JSON.parse(localStorage.getItem('ranking')).sort((a, b) => b.score - a.score);
  console.log(ranking);
  return (
    <div>
      <div data-testid="ranking-title">Ranking</div>
      {ranking.map((player, i) =>
        <div>
          <img src={player.picture} alt="player" />
          <p data-testid={`player-name-${i}`}>{player.name}</p>
          <p data-testid={`player-score-${i}`}>{player.score}</p>
        </div>,
        )}
      <Link to="/">
        <button data-testid="btn-go-home">Go home</button>
      </Link>
    </div>
  );
};

export default Ranking;
