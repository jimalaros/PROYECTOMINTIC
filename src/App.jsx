import Template1 from 'layouts/Template1';
import Template2 from 'layouts/Template2';
import Template3 from 'layouts/Template3';
import Template4 from 'layouts/Template4';
import Principal from 'pages/admin/Principal';
import Ordenes from 'pages/admin/Ordenes';
import SesionU from 'pages/usuarios/SesionU';
import Index from 'pages/Index';
import Login from 'pages/Login';
import Registro from 'pages/Registro';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'styles/styles.css';

function App() {
  return (
    <div className='App'>
    <Router>
      <Switch>
        <Route path= {['/admin/Principal', '/admin/Ordenes']}>
          <Template2>
            <Switch>
            <Route path = '/admin/Principal'>
              <Principal/>
              </Route>
              <Route path = '/admin/Ordenes'>
              <Ordenes/>
              </Route>
            </Switch>
          </Template2>
        </Route>
        <Route path= {['/usuarios/SesionU']}>
          <Template4>
            <Switch>
              <Route path = '/usuarios/SesionU'>
              <SesionU/>
              </Route>
            </Switch>
          </Template4>
        </Route>   
        <Route path= {['/Login', '/Registro']}>
          <Template1>
            <Switch>
              <Route path='/Login'>
                <Login/>
              </Route>
              <Route path='/Registro'>
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
  );
};

export default App;