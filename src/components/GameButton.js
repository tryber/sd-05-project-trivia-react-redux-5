import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import fetchQuestions from '../services/TokenAPI';

export default function GameButton({ isAvailable }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/game">
        <button
          data-testid="btn-play"
          disabled={isAvailable}
          onClick={() => dispatch(fetchQuestions())}
        >
          Jogar
        </button>
      </Link>
    </div>
  );
}

GameButton.propTypes = {
  isAvailable: PropTypes.bool.isRequired,
};
