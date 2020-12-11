import { useEffect, useReducer } from 'react';
import axios from "axios";
import reducer, { SET_QUESTIONS } from "../reducers/application";

export function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    questions: []
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

  return { state };
};