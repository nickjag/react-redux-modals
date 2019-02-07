import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import { ModalRoot } from 'react-redux-modals';
import rootReducer from './reducers';
import ConnectedApp from './components/app';
import './index.css';

import * as modalComponents from './modal_components';

const store = createStore(rootReducer, applyMiddleware(logger));

const ModalRootWithStore = ModalRoot(store);

const Root = () => (
  <React.Fragment>
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
    <ModalRootWithStore
      modalComponents={modalComponents}
      config={{ zIndex: 5 }}
    />
  </React.Fragment>
);

ReactDOM.render(<Root />, document.getElementById('root'));
