import { sortAPIQuestions } from "../helpers/selectors";
const SET_QUESTIONS = "SET_QUESTIONS";
const SET_CURRENT_QUESTION = "SET_CURRENT_QUESTION";
const SET_SCORE = "SET_SCORE";

const reducer = function(state, action) {
  console.log('s', state)
  console.log('a', action)
  switch (action.type) {
    case SET_QUESTIONS:
      const questions = sortAPIQuestions(action.questions)
      return {
        ...state,
        questions 
      };
    case SET_CURRENT_QUESTION:
      return {
        ...state
      };
    case SET_SCORE:
      return {
        ...state,
        score: (state.score + 1)
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

export default reducer;
export {
  SET_QUESTIONS,
  SET_CURRENT_QUESTION,
  SET_SCORE
};