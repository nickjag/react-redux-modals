import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.css';
import Button from './button';
import { actions } from '../src/';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>react-redux-modals</h1>
        <article>
          <p><Button onClick={() => this.props.showModal('MODAL_AGREE')}>Simple agreement</Button></p>
          <p><Button onClick={() => this.props.showModal('MODAL_LAYER_BOTTOM')}>Multiple modals</Button></p>
          <p><Button onClick={() => this.props.showModal('MODAL_AGREE')}>Must complete me</Button></p>
          <p><Button onClick={() => this.props.showModal('MODAL_AGREE')}>Pass input data</Button></p>
        </article>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps, actions)(App)