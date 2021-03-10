import React from 'react';
import { Switch } from 'react-router-dom';
import Landing from '../pages/Landing';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import ChangePassword from '../pages/ChangePassword';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

import Route from './route';

const Routes: React.FC = () => {
  
  return (
      <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/register" component={Register} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/change-password" component={ChangePassword} />
          <Route isPrivate path="/dashboard" component={Dashboard} />
          <Route isPrivate path="/profile" component={Profile} />
      </Switch>
  );
}

export default Routes;