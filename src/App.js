import logo from './logo.svg';
import './App.css';
import TermList from './components/TermList'
import SearchTerm from './components/SearchTerm';
import SubmitTerm from './components/SubmitTerm';

function App() {


  //get data

  return (
    <div className="App">
      <SubmitTerm />
      <TermList />
    </div>
  );
}

export default App;
