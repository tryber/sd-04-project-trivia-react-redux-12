export const INPUT_CHANGE = 'INPUT_CHANGE';

const get_input = (email, name) => ({
  type: INPUT_CHANGE,
  email: email,
  name: name,
})

export default get_input;
