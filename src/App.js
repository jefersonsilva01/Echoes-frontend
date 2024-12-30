import './App.css';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
