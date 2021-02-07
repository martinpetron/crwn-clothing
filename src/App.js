import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';




function App() {
  return (
    <div>
      <Switch>
        <Route exaact path='/' component={HomePage} />
        <Route exaact path='/hats' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
