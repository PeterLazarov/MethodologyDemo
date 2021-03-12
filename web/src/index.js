import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import redux from './redux';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={redux.store}>
      <PersistGate loading={null} persistor={redux.persistor}>
        <Route component={App} />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

