import { ADD_USER } from '../action';

const CryptoJS = require('crypto-js');

const INITIAL_STATE = [];

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER:
      // (state.filter(action.email));
      return (
        {
          name: action.name,
          email: action.email,
          hash: CryptoJS.MD5(action.email.toLowerCase()).toString(),
        }
      );
    default:
      return state;
  }
};

export default userReducer;
