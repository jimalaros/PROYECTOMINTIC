import Template1 from 'layouts/Template1';
import Template2 from 'layouts/Template2';
import Template3 from 'layouts/Template3';
import Admin from 'pages/admin/Index';
import Usuarios from 'pages/admin/Usuarios';
import Ventas from 'pages/admin/Ventas';
import Index from 'pages/Index';
import Login from 'pages/Login';
import Registro from 'pages/Registro';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'styles/styles.css';

function App() {
  return (
    <div className='App'>
    <Router>
      <Switch>
        <Route path= {['/admin', '/admin/Usuarios', '/admin/Ventas']}>
          <Template2>
            <Switch>
              <Route path = '/admin/Usuarios'>
              <Usuarios/>
              </Route>
              <Route path = '/admin/Ventas'>
              <Ventas/>
              </Route>
              <Route path='/admin'>
              <Admin/>
              </Route>
            </Switch>
          </Template2>
        </Route>  
        <Route path= {['/Login', '/Registro']}>
          <Template1>
            <Switch>
              <Route path='/Login'>
                <Login/>
              </Route>
              <Route path='/registro'>
                <Registro/>
              </Route>
            </Switch>
          </Template1>
        </Route>
        <Route path={['/*']}>
          <Template3>
            <Switch>
              <Route path = '/'>
                <Index/>
              </Route>
            </Switch>
          </Template3>
        </Route>
      </Switch>
    </Router>
    </div>
  )
};

export default App;