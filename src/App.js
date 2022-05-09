
import questions from './data'
import Accordian from './components/Accordian';

function App() {
  return (
    <div className="App">
      <center>
        {questions.map(question => {
          return <Accordian question={question} />
        })}
      </center>
    </div>
  );
}

export default App;
