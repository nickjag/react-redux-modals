import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './app.css';
import { actions } from '../src/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        <button onClick={() => this.props.showModal('MODAL_ALERT')}>test</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps, actions)(App)