import fetchToken from './TokenAPI';

const QUESTIONS_URL = 'https://opentdb.com/api.php?amount=5&token=';

function fetchQuestions() {
  return fetchToken().then((token) =>
    fetch(QUESTIONS_URL + token)
    .then((response) => response.json())
    .then((data) => data.results));
};

export default fetchQuestions;
