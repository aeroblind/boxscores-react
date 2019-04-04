import React from 'react';
import ReactDOM from 'react-dom';

import Home from '../src/pages/home';
import MainLayout from './layouts/mainLayout';

import './app.css';

document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('root');
  if (target) {
    ReactDOM.render(
      <MainLayout>
        <Home />
      </MainLayout>,
      target,
    );
  } else {
    console.warn('tried to load React and failed :(');
  }
});