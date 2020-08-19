import React from 'react';
import PropTypes from 'prop-types';
import ConfigButton from './ConfigButton';

class Game extends React.Component {
  render() {
    const { hash, player } = this.props;
    return (
      <div>
        <header>
          <p data-testid="header-player-name">
            Jogador: {player}
          </p>
          <img data-testid="header-profile-picture" src={`https://www.gravatar.com/avatar/${hash}`} alt="jogador" />
          <p data-testid="header-score">Placar: 0</p>
        </header>
        <ConfigButton />
      </div>
    );
  }
}

Game.propTypes = {
  hash: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired,
};

export default Game;
