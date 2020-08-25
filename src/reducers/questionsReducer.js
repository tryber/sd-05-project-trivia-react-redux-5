import { ADD_QUESTION } from '../action';

const INITIAL_STATE = [];

const questionsReducer = (state = INITIAL_STATE, { questions, type }) => {
  switch (type) {
    case ADD_QUESTION:
      return questions;
    default:
      return state;
  }
};

export default questionsReducer;
