import 'jquery';
import 'tether';
import React from 'react';
import { browserHistory, Router } from 'react-router';
import routes from './routes';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';

const App = () => (
  <Router children={routes} history={browserHistory} />
);

export default App;
