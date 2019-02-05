import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ModalFactory from './factory';

export default (store) => {

  if (!store) {
    throw Error('Redux store must be passed as an argument to ModalRoot.');
  }

  class ModalRoot extends Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.modalTarget = document.createElement('div');
      this.modalTarget.className = 'full-modal modal';
      this.modalTarget.setAttribute('data-testid','modal-root');
      document.body.appendChild(this.modalTarget);
      this._render();
    }

    componentWillUpdate() {
      this._render();
    }

    componentWillUnmount() {
      ReactDOM.unmountComponentAtNode(this.modalTarget);
      document.body.removeChild(this.modalTarget);
    }

    _render() {
      ReactDOM.render(
        <Provider store={store}>
          <ModalFactory id="modal-factory" modalTypes={this.props.modalTypes} config={this.props.config} />
        </Provider>,
        this.modalTarget
      );
    }

    render() {
      return <noscript />;
    }
  }

  return ModalRoot;

}