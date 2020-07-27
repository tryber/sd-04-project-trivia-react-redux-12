import { combineReducers } from 'redux';
import players from './players';
import answers from './answers';
import questions from './questions';

const rootReducer = combineReducers({
  players,
  answers,
  questions,
});

export default rootReducer;
