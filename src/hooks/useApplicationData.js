import { useEffect, useReducer } from 'react';
import axios from "axios";
import reducer, { SET_QUESTIONS, SET_SCORE, SET_CURRENT_QUESTION, SET_SHOW_STATE } from "../reducers/application";

export function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    questions: [],
    score: 0,
    currentQuestion: 0,
    showScore: false
  });

  useEffect(() => {
    Promise.all([
      axios.get(`https://opentdb.com/api.php?amount=8&category=9&difficulty=easy&type=multiple`),
    ]).then((all) => {
      dispatch({
        type: SET_QUESTIONS,
        questions: all[0].data.results
      })
    });
  }, []);

  const setScore = (guessCorrect) => {
    if(guessCorrect) {
      dispatch({
        type:SET_SCORE,
        ...state
      })
    }
  };

  const setCurrentQuestion = (currentQuestion) => {
    if(currentQuestion) {
      dispatch({
        type: SET_CURRENT_QUESTION,
        ...state
      })
    }
  };

  const setShowState = (show) => {
    if(show) {
      dispatch({
        type: SET_SHOW_STATE,
        ...state,
      })
    }
  }

  

  return { 
    state,
    setCurrentQuestion,
    setScore,
    setShowState
  };
};