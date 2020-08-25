const TOKEN_URL = 'https://opentdb.com/api_token.php?command=request';


export default function fetchToken() {
  return fetch(TOKEN_URL)
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem('token', data.token);
    return data.token;
  },
    (error) => console.log('fetchToken', error));
}
