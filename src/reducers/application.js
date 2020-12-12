import { sortAPIQuestions } from "../helpers/selectors";
const SET_QUESTIONS = "SET_QUESTIONS";
const SET_CURRENT_QUESTION = "SET_CURRENT_QUESTION";
const SET_SCORE = "SET_SCORE";
const SET_SHOW_STATE = "SET_SHOW_STATE"

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
        ...state,
        currentQuestion: (state.currentQuestion + 1)
      };
    case SET_SCORE:
      return {
        ...state,
        score: (state.score + 1)
      };
    case SET_SHOW_STATE: 
      return {
        ...state,
        showScore: true
      }
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
  SET_SCORE,
  SET_SHOW_STATE
};