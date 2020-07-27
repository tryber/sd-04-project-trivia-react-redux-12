import { apiQuestions } from '../service';
// players actions
export const SET_PLAYER = 'SET_PLAYER';
export const UPDATE_SCORE = 'UPDATE_SCORE';
// questions actions
export const GET_QUESTIONS_REQUEST = 'GET_QUESTIONS_REQUEST';
export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS';
export const GET_QUESTIONS_FAILURE = 'GET_QUESTIONS_FAILURE';
export const SET_TOKEN = 'SET_TOKEN';
// answers actions
export const GET_NEXT_QUESTION = 'GET_NEXT_QUESTION';
export const TOOGLE_ANSWERS = 'TOOGLE_ANSWERS';

// players actionCreators
export const setPlayer = (email, name) => ({
  type: SET_PLAYER,
  email,
  name,
});

export const getQuestionsRequest = () => ({
  type: GET_QUESTIONS_REQUEST,
});

export const getQuestionsSuccess = (data) => ({
  type: GET_QUESTIONS_SUCCESS,
  data,
});

export const getQuestionsFailure = (error) => ({
  type: GET_QUESTIONS_FAILURE,
  error,
});

export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});

// answers actionCreators
export const getNextQuestion = () => ({
  type: GET_NEXT_QUESTION,
});

export const toggleAnswers = () => ({
  type: TOOGLE_ANSWERS,
});

// API dispatch
export const getQuestions = (token) => (dispatch) => {
  dispatch(getQuestionsRequest());
  apiQuestions(token)
    .then((data) => dispatch(getQuestionsSuccess(data)))
    .catch((error) => dispatch(getQuestionsFailure(error)));
};
