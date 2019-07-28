import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import LogIn from '@/pages/LogIn';
import SignUp from '@/pages/SignUp';

import Dashboard from '@/pages/Dashboard';
import Profile from '@/pages/Profile';

export default function Rountes() {
  return (
    <Switch>
      <Route exact path="/" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
