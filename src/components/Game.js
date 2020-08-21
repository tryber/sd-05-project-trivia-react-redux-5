import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ConfigButton from './ConfigButton';
import QuestionAndAnswers from './QuestionAndAnswers.jsx';

class Game extends React.Component {
  header() {
    const { hash, player, score } = this.props;
    return (
      <header>
        <p>
          Player:
          <span data-testid="header-player-name"> {player}</span>
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
  }

  render() {
    console.log('score');
    return (
      <div>
        {this.header()}
        <QuestionAndAnswers />
        <ConfigButton />
      </div>
    );
  }
}

Game.propTypes = {
  hash: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired,
  score: PropTypes.number,
};

const mapStateToProps = (state) => ({
  player: state.userReducer.name,
  hash: state.userReducer.hash,
  score: state.userReducer.score,
});

export default connect(mapStateToProps)(Game);
