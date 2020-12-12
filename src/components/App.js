import './App.css';
import {
  useApplicationData
} from "../hooks/useApplicationData";

function App() {
  const { 
    state,
    setCurrentQuestion,
    setScore,
    setShowScore
  } = useApplicationData();
  console.log('s', state)

  const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(state.score + 1);
		}

		const nextQuestion = state.currentQuestion + 1;
		if (nextQuestion < state.questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
		  setShowScore(true);
		}
	};

  return (
    <div className="App">
      <header className="App-header">
        <div className='question-section'>
          <div className='question-count'>
            <span>Question {state.currentQuestion + 1}</span>/{state.questions.length}
            <div className='question-text'>
              {state.questions[state.currentQuestion].question}
            </div>
          </div>  
          <div className='answer-section'>
              {state.questions[state.currentQuestion].answerOptions.map((answerOption) => (
                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answer}</button>
              ))}
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
