import Index from 'pages/Index';
import Admin from 'pages/Admin';
import Login from 'pages/Login';
import Registro from 'pages/Registro';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';



function App() {
  return (
    <div className='App'>
    <Router>
      <Switch>
        <Route path = '/login'>
          <Login/>
        </Route>
        <Route path = '/registro'>
          <Registro/>
        </Route>
        <Route path = '/admin'>
          <Admin/>
        </Route>
        <Route path = '/'>
          <Index/>
        </Route>
      </Switch>
    </Router>
    </div>
  )
};

export default App;