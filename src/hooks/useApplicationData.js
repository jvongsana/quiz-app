import { useEffect, useReducer } from 'react';
import axios from "axios";
import reducer, 
     { SET_SHOW_QUIZ, 
       SET_QUESTIONS, 
       SET_SCORE, 
       SET_CURRENT_QUESTION, 
       SET_SHOW_SCORE, 
       SET_START_TIME, 
       SET_END_TIME, 
       SET_QUIZ_FINISHED } from "../reducers/application";

export function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    showQuiz: false,
    questions: [ {
      question: '',
      answerOptions: [{}]
    } ],
    score: 0,
    currentQuestion: 0,
    showScore: false,
    startTime: '',
    endTime: '',
    quizFinished: false
  });

  useEffect(() => {
    axios.get(`https://opentdb.com/api.php?amount=8&category=27&difficulty=easy&type=multiple`)
    .then((all) => {
      dispatch({
        type: SET_QUESTIONS,
        questions: all.data.results
      });
    });
  }, []);

  const setShowQuiz = (showQuiz) => {
    if(showQuiz) {
      dispatch({
        type:SET_SHOW_QUIZ,
        ...state
      })
    }
  };

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

  const setShowScore = (show) => {
    if(show) {
      dispatch({
        type: SET_SHOW_SCORE,
        ...state,
      })
    }
  }

  const setStartTime = () => {
    dispatch({
      type: SET_START_TIME,
      ...state,
    })
  }

  const setEndTime = () => {
    dispatch({
      type: SET_END_TIME,
      ...state,
    })
  }

  const setQuizFinished = () => {
    dispatch({
      type: SET_QUIZ_FINISHED,
      ...state,
    })
  }

  return { 
    state,
    setShowQuiz,
    setCurrentQuestion,
    setScore,
    setShowScore,
    setStartTime,
    setEndTime,
    setQuizFinished
  };
};