import { combineReducers } from 'redux';
import userReducer from './userReducer';
import questionsReducer from './questionsReducer';
import timerReducer from './timerReducer'

const reducer = combineReducers({ userReducer, questionsReducer, timerReducer });

export default reducer;
