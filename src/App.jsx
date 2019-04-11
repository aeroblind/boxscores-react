import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../src/pages/home';
import MainLayout from './layouts/mainLayout';

import './app.css';

document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('root');
  if (target) {
    ReactDOM.render(
      <Router>
        <MainLayout>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/standings" component={() => <div>Standings</div>}/>
              <Route path="/stats" component={() => <div>Stats</div>}/>
              <Route component={Home}/>
            </Switch>
        </MainLayout>
      </Router>,
      target,
    );
  } else {
    console.warn('tried to load React and failed :(');
  }
});