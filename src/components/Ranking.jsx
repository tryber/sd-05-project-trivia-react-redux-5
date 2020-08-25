import React from 'react';
import { Link } from 'react-router-dom';

const Ranking = () => {
  const ranking = JSON.parse(localStorage.getItem('ranking')).sort(
    (a, b) => b.score - a.score,
  );
  console.log(ranking);
  return (
    <div className="Game-divE">
            <Link to="/">
        <button data-testid="btn-go-home" className="btn btn-block btn-success">
          Go home
        </button>
      </Link>
      
      <div data-testid="ranking-title" >

        {ranking.map((player, i) => (
          <div className="Game-header">
            <img src={player.picture} alt="player" />
            <div className="player-data">
              <p data-testid={`player-name-${i}`}>
                {i + 1}.{player.name}
              </p>
              <p data-testid={`player-score-${i}`}>{player.score}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to="/">
        <button data-testid="btn-go-home" className="btn btn-block btn-success">
          Go home
        </button>
      </Link>
    </div>
  );
};

export default Ranking;
