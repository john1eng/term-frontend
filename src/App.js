
import './App.css';
import SearchTerms from './components/SearchTerms';
import AddTerm from './components/AddTerm';
import Navigation from './components/Navigation';
import { Switch, Route, Redirect } from "react-router"

function App() {

  //get data
  let route = (
    <Switch>
      <Route path="/Search" render={(prop)=><SearchTerms />} />
      <Route path="/Add" render={(prop)=><AddTerm />} /> 
      <Route path="/" exact render={(props)=><AddTerm />} />
      <Redirect to="/" />
    </Switch> 
    )

  return (
    <div className="App container bg-white min-h-screen">
      <Navigation />
      {route}
    </div>
  );
}

export default App;
