import { combineReducers } from 'redux';
import userReducer from './userReducer';
import questionsReducer from './questionsReducer';

const reducer = combineReducers({ userReducer, questionsReducer });

export default reducer;
