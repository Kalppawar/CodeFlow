import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import App from './App'
import Signup from './auth/Signup.jsx'
import Signin from './auth/Signin.jsx'
import Private from './core/Private.jsx'
import PrivateRoute from './auth/PrivateRoute.jsx'
import AdminRoute from './auth/AdminRoute.jsx'
import Admin from './core/Admin.jsx'

const Routes = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          <PrivateRoute path="/private" exact component={Private} />
          <AdminRoute path="/admin" exact component={Admin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes
