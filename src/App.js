import React, { Fragment, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';
import NavBar from './components/layout/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
