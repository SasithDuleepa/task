
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Register from './pages/register/register';
import Login from './pages/login/login';

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route path="/" exact><Register/></Route>
          <Route path='/login' exact><Login/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
