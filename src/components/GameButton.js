import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchAndAddQuestions } from '../action';

export default function GameButton({ isAvailable, click }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/game">
        <button
          data-testid="btn-play"
          disabled={isAvailable}
          onClick={() => {
            dispatch(fetchAndAddQuestions());
            click();
          }}
        >
          Jogar
        </button>
      </Link>
    </div>
  );
}

GameButton.propTypes = {
  isAvailable: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
};
