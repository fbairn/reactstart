import React, { Fragment, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';
import Navbar from './components/layout/Navbar';

function App() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
      </Fragment>
    </Provider>
  );
}

export default App;
