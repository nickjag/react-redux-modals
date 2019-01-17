import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { logger } from 'redux-logger';
import rootReducer from './reducers';
import './index.css';
import App from './components/app';

import * as modalTypes from './modal_types';
import { ModalRoot } from './src/';

const store = createStore(
  rootReducer,
  applyMiddleware(logger),
);

const Root = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <App />
      </Provider>
      <ModalRoot store={store} modalTypes={modalTypes} />
    </React.Fragment>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
