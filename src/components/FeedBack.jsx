import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const header = (player, hash, score) => (
  <header>
    <p>
      Player:
      <span data-testid="header-player-name">{player}</span>
    </p>
    <img
      data-testid="header-profile-picture"
      src={`https://www.gravatar.com/avatar/${hash}`}
      alt="jogador"
    />
    <p>
      Score:
      <span data-testid="header-score">{score}</span>
    </p>
  </header>
);

const Feedback = (props) => {
  const { hash, player, score } = props;
  const assertions = JSON.parse(localStorage.getItem('state')).player
    .assertions;


  return (
    <div>
      {header(player, hash, score)}
      <div>
        {assertions < 3 && (
          <div data-testid="feedback-text">Podia ser melhor...</div>
        )}
        {assertions >= 3 && (
          <div data-testid="feedback-text">Podia ser melhor...</div>
        )}
        <p>
          Você acertou{' '}
          <span data-testid="feedback-total-question">{assertions} </span>
          questões!
        </p>
        <p>
          Um total de <span data-testid="feedback-total-score">{score} </span>
          pontos!
        </p>
      </div>
      <Link to="/">
        <button data-testid="btn-play-again">Jogar Novamente</button>
      </Link>
      <Link to="/ranking">
        <button data-testid="btn-ranking">Ver Ranking</button>
      </Link>
    </div>
  );
};

Feedback.propTypes = {
  hash: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired,
  score: PropTypes.number,
};

const mapStateToProps = (state) => ({
  player: state.userReducer.name,
  hash: state.userReducer.hash,
  score: state.userReducer.score,
});

export default connect(mapStateToProps)(Feedback);

// A pessoa deve ver a mensagem de feedback

// A mensagem deve ser "Podia ser melhor..." caso a pessoa acerte menos de 3 perguntas
// A mensagem deve ser "Mandou bem!" caso a pessoa acerte 3 perguntas ou mais
// O elemento da mensagem de feedback deve possuir o atributo data-testid com o valor feedback-text
