import './App.css';
import { useApplicationData } from "../hooks/useApplicationData";

function App() {
  const { state } = useApplicationData();
  console.log('s', state)
  return (
    <div className="App">
      <header className="App-header">
        <div className='question-section'>  
         
        </div>
      </header>
    </div>
  );
}

export default App;
