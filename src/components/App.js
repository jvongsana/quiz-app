import {
  useApplicationData
} from "../hooks/useApplicationData";
import './App.css';
import QuestionSection from './QuestionSection';
import Score from './Score';

export default function App() {
  const { 
    state,
    setCurrentQuestion,
    setScore,
    setShowScore
  } = useApplicationData();
  console.log('a s', state)

  return (
    <div className="App">
      <header className="App-header">
        {state.showScore ? (
          <Score 
            questions={state.questions}
            score={state.score}
          />
        ) : (
          <QuestionSection 
            questions={state.questions}
            score={state.score}
            currentQuestion={state.currentQuestion}
            showScore={state.showScore}
            setCurrentQuestion={setCurrentQuestion}
            setScore={setScore}
            setShowScore={setShowScore}
          />
        )}
      </header>
    </div>
  );
};
