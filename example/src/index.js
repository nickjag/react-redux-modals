import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import rootReducer from './reducers';
import App from './components/app';
import './index.css';

import * as modalTypes from './modal_types';
import { ModalRoot } from 'react-redux-modals';

const store = createStore(
  rootReducer,
  applyMiddleware(logger),
);

const ModalRootWithStore = ModalRoot(store);

const Root = () => {
  return (
    <div>
      <Provider store={store}>
        <App />
      </Provider>
      <ModalRootWithStore modalTypes={modalTypes} config={{ zIndex: 5 }} />
    </div>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
