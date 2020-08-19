import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import fetchToken from '../services/TokenAPI';
import fetchQuestions from '../services/TokenAPI';

export default function GameButton({click, isAvailable}) {
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
