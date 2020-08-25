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

class Feedback extends React.Component {
  componentDidMount() {
    const { player, score, hash } = this.props;
    const previousLocalStorage = JSON.parse(localStorage.getItem('ranking')) || [];
    localStorage.setItem('ranking', JSON.stringify([...previousLocalStorage,
      { name: player, score, picture: `https://www.gravatar.com/avatar/${hash}` },
    ]));
  }
  render() {
    const { hash, player, score } = this.props;
    const assertions = JSON.parse(localStorage.getItem('state')).player
      .assertions;
    return (
      <div className='Game-div'>
      <div className="questions">
        {header(player, hash, score)}
        <div>
          {assertions < 3 && (<div data-testid="feedback-text">Podia ser melhor...</div>)}
          {assertions >= 3 && (<div data-testid="feedback-text">Mandou bem!</div>)}
          <p>
            Você acertou{' '}
            <span  data-testid="feedback-total-question">{assertions} </span>
            questões!
          </p>
          <p>
            Um total de <span data-testid="feedback-total-score">{score} </span>
            pontos!
          </p>
        </div>
        <div className='botoes-retornar'>
        <Link to="/">
          <button data-testid="btn-play-again" className='btn-block btn btn-success'>Jogar Novamente</button>
        </Link>
        <Link to="/ranking">
          <button data-testid="btn-ranking" className='btn btn-block'>Ver Ranking</button>
        </Link>
        </div>
      </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  hash: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  player: state.userReducer.name,
  hash: state.userReducer.hash,
  score: state.userReducer.score,
});

export default connect(mapStateToProps)(Feedback);
