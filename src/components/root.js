import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ModalFactory from './factory';
// import { StoreContext } from '../store_context';

class ModalRoot extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.modalTarget = document.createElement('div');
    this.modalTarget.className = 'full-modal modal';
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
      <Provider store={this.props.store}>
        <ModalFactory modalTypes={this.props.modalTypes} config={this.props.config} />
      </Provider>,
      this.modalTarget
    );
  }

  render() {
    return <noscript />;
  }
}

// ModalRoot.contextType = StoreContext;

export default ModalRoot;