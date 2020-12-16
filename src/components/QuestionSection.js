import React from 'react';

export default function QuestionSection(props) {
  const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			props.setScore(props.score + 1);
		}
    
		const nextQuestion = props.currentQuestion + 1;
		if (nextQuestion < props.questions.length) {
			props.setCurrentQuestion(nextQuestion);
		} else {
		  props.setShowScore(true);
		}
	};

  return (
    <div className='question-section'>
      <div className='question-count'>
        <span>Question {props.currentQuestion + 1}</span>/{props.questions.length}
        <div className='question-text'>
          {props.questions[props.currentQuestion].question}
        </div>
      </div>  
      <div className='answer-section'>
        {props.questions[props.currentQuestion].answerOptions.map((answerOption) => (
          <button key={answerOption.answer} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answer}</button>))}
      </div>
    </div>
  )
};