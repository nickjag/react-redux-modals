import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ModalFactory from './factory';

export default (store) => {
  
  class ModalRoot extends Component {

    constructor(props) {
      super(props);
    }
  
    componentDidMount() {
      console.log('aa1');
      this.modalTarget = document.createElement('div');
      this.modalTarget.className = 'full-modal modal';
      document.body.appendChild(this.modalTarget);
      this._render();
    }
    
    componentWillReceiveProps(nextProps) {
      console.log('testing next props rr', nextProps);
    }
  
    componentWillUpdate(nextProps) {
  
      console.log('testing next props', nextProps);
  
      this._render();
    }
  
    componentWillUnmount() {
  
      ReactDOM.unmountComponentAtNode(this.modalTarget);
      document.body.removeChild(this.modalTarget);		
    }
  
    _render() {
  
      store.dispatch({
        type: 'react-redux-modals/SHOW',
        payload: { type: 'MODAL_AGREE' }
      });
      
      ReactDOM.render(
        <Provider store={store}>
          <ModalFactory modalTypes={this.props.modalTypes} config={this.props.config} />
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