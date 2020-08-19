import React from 'react';
import PropTypes from 'prop-types';
import ConfigButton from './ConfigButton';
import { connect } from 'react-redux';
import QuestionAndAnswers from './QuestionAndAnswers';

class Game extends React.Component {
  
  header(hash, player) {
    return (
      <header>
        <p>
          Player:
          <span data-testid="header-player-name"> {player}
          </span>
        </p>
        <img data-testid="header-profile-picture" src={`https://www.gravatar.com/avatar/${hash}`} alt="jogador" />
        <p>
          Score:
          <span data-testid="header-score">
            0
          </span>
        </p>
      </header>
    );
  }
  
  render() {
    const { hash, player } = this.props;
    return (
      <div>
        {this.header(hash, player)}
        <QuestionAndAnswers />
        <ConfigButton />
      </div>
    );
  }
}

Game.propTypes = {
  hash: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.userReducer.name,
  hash: state.userReducer.hash,
});

export default connect(mapStateToProps)(Game);
