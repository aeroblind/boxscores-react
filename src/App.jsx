import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import Home from '../src/pages/home';
import MainLayout from './layouts/mainLayout';
import configureStore from '../src/_store/configureStore';

//  Styles
import './app.css';

//  Redux
const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('root');
  if (target) {
    ReactDOM.render(
      <Provider store={ store }>
        <Router>
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/standings" component={() => <div>Standings</div>}/>
              <Route path="/stats" component={() => <div>Stats</div>}/>
              <Route component={Home}/>
            </Switch>
          </MainLayout>
        </Router>
      </Provider>,
      target,
    );
  } else {
    console.warn('tried to load React and failed :(');
  }
});