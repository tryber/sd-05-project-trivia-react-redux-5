// const fetch = require('node-fetch');

const TOKEN_URL = "https://opentdb.com/api_token.php?command=request";
const QUESTIONS_URL = `https://opentdb.com/api.php?amount=5&token=`;
const IS_REQUESTING = "IS_REQUESTING";

const isRequesting = () => ({
  type: IS_REQUESTING,
});

const fetchToken = () => {
    return fetch(TOKEN_URL)
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem('token', data.token);
      return data.token;
    },
      (error) => console.log('fetchToken', error))
};

const fetchQuestions = () => {
  return (dispatch) => {
    dispatch(isRequesting());
    return fetchToken().then((token) =>
      fetch(QUESTIONS_URL + token)
      .then(response => response.json())
      .then(data => console.log(data.results))
    )
  }
}

export default fetchQuestions;
