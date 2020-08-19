import fetchQuestions from "../services/QuestionsAPI";

export const IS_REQUESTING = 'IS_REQUESTING';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_USER = 'ADD_USER';

export function addUser({ name, email }) {
  return ({
    type: ADD_USER,
    name,
    email,
  });
}

const isRequesting = () => ({
  type: IS_REQUESTING,
});

const addQuestions = (questions) => ({
  type: ADD_QUESTION,
  questions
});

export function fetchAndAddQuestions() {
  return (dispatch) => {
    dispatch(isRequesting());
    return fetchQuestions()
    .then(questions => dispatch(addQuestions(questions)))
  };
}
