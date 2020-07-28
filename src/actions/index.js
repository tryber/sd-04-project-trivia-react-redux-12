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
export const TOGGLE_ANSWERS = 'TOGGLE_ANSWERS';
export const TOGGLE_TIMER = 'TOGGLE_TIMER';
export const RESET_TIMER = 'RESET_TIMER';
export const TICK = 'TICK';

// players actionCreators
export const setPlayer = (email, name) => ({
  type: SET_PLAYER,
  email,
  name,
});

export const updateScore = (score, assertions) => ({
  type: UPDATE_SCORE,
  score,
  assertions,
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
  type: TOGGLE_ANSWERS,
});

export const toggleTimer = () => ({
  type: TOGGLE_TIMER,
});

export const resetTimer = () => ({
  type: RESET_TIMER,
});

export const tick = () => ({
  type: TICK,
});

// API dispatch
export const getQuestions = (token) => (dispatch) => {
  dispatch(getQuestionsRequest());
  apiQuestions(token)
    .then((data) => dispatch(getQuestionsSuccess(data)))
    .catch((error) => dispatch(getQuestionsFailure(error)));
};
