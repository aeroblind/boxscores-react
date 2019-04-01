import React from 'react';
import ReactDOM from 'react-dom';

import Home from '../src/pages/home';

document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('root');
  if (target) {
    ReactDOM.render(
      <Home></Home>,
      target,
    );
  } else {
    console.warn('tried to load React and failed :(');
  }
});