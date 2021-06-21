import React, {useState} from "react";
import { Route, Switch, useHistory } from 'react-router-dom';
import ProtectedRoute from '../../utils/ProtectedRoute';
import Main from '../Main/Main';
import Dashboard from '../Dashboard/Dashboard'

function App() {

  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogin () {
    setLoggedIn(true);
    history.push('/dashboard')
  }

  function handleLogout () {
    setLoggedIn(false);
    history.push('/')
  }

  return (

    <Switch>
      <ProtectedRoute path="/dashboard"
        loggedIn={loggedIn}   
        component={Dashboard}
        logout={handleLogout}
      />
      <Route path='/'>
        <Main 
          login={handleLogin}
        />
      </Route>
    </Switch>

  );

}

export default App;
