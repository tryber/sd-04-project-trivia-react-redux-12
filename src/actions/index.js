export const INPUT_CHANGE = 'INPUT_CHANGE';
export const ANSWERS = 'ANSWERS';
export const CLEAR_BTN = 'CLEAR_BTN';

export const getInput = (email, name) => ({
  type: INPUT_CHANGE,
  email,
  name,
});

export const answers = (correct, wrong, random) => ({
  type: ANSWERS,
  correct,
  wrong,
  random,
});

export const clearBtn = () => ({
  type: CLEAR_BTN,
});
