import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ModalFactory from './factory';

export default store => {
  if (!store) {
    throw Error('Redux store must be passed as an argument to ModalRoot.');
  }

  class ModalRoot extends Component {
    componentDidMount() {
      this.modalTarget = document.createElement('div');
      this.modalTarget.className = 'full-modal modal';
      this.modalTarget.setAttribute('data-testid', 'modal-root');
      document.body.appendChild(this.modalTarget);
      this.documentRender();
    }

    componentWillUpdate() {
      this.documentRender();
    }

    componentWillUnmount() {
      ReactDOM.unmountComponentAtNode(this.modalTarget);
      document.body.removeChild(this.modalTarget);
    }

    documentRender() {
      ReactDOM.render(
        <Provider store={store}>
          <ModalFactory
            id="modal-factory"
            modalComponents={this.props.modalComponents}
            config={this.props.config}
          />
        </Provider>,
        this.modalTarget,
      );
    }

    render() {
      return <noscript />;
    }
  }

  return ModalRoot;
};
