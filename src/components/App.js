import {
  useApplicationData
} from "../hooks/useApplicationData";
import './App.css';
import StartQuiz from './StartQuiz';
import QuestionSection from './QuestionSection';
import Score from './Score';

export default function App() {
  const { 
    state,
    setShowQuiz,
    setCurrentQuestion,
    setScore,
    setShowScore,
    setStartTime,
    setEndTime,
    setQuizFinished
  } = useApplicationData();

  if (state.showScore && !state.quizFinished) {
    setQuizFinished();
    setEndTime();
  }
  
  return (
    <div className="App">
      <header className="App-header">
        {state.showQuiz ? (
          state.showScore ? (
            <Score 
              questions={state.questions}
              score={state.score}
              showScore={state.showScore}
              startTime={state.startTime}
              endTime={state.endTime}
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
          )
        ) : (
          <StartQuiz 
            setShowQuiz={setShowQuiz}
            setStartTime={setStartTime}
          />
        )}
      </header>
    </div>
  );
};
