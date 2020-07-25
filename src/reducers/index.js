import { combineReducers } from 'redux';
import cadastro from './cadastro';
import answers from './answers'

const rootReducer = combineReducers({
  cadastro,
  answers,
});

export default rootReducer;
