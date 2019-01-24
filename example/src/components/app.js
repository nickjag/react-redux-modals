import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './button';
import { actions } from '../src/';
import './app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.onSubmitData = this.onSubmitData.bind(this);
  }
  
  onSubmitData(data) {
    this.props.hideModal('MODAL_PROPS');
    console.log(data);

    setTimeout(() => {
      alert("The parent received some data back...\n\n" + data);
    }, 300);
  }

  render() {
    return (
      <div className="app">
        <h1>react-redux-modals</h1>
        <article>
          <p><Button onClick={() => this.props.showModal('MODAL_AGREE')}>Simple agreement</Button></p>

          <p><Button onClick={() => this.props.showModal('MODAL_FADE')}>With fade transition</Button></p>
          
          <p><Button onClick={() => this.props.showModal('MODAL_LAYER_BOTTOM')}>Multiple modals</Button></p>

          <p><Button onClick={() => this.props.showModal('MODAL_STRICT')}>No escaping allowed</Button></p>

          <p><Button onClick={() => this.props.showModal('MODAL_PROPS', {
            name: 'Nick',
            onSubmitData: this.onSubmitData,
          })}>Pass props between</Button></p>

        </article>

        <a className="npm" href="https://www.npmjs.com/package/react-redux-modals" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="14" viewBox="0 0 18 7"><path fill="#CB3837" d="M0 0h18v6H9v1H5V6H0V0zm1 5h2V2h1v3h1V1H1v4zm5-4v5h2V5h2V1H6zm2 1h1v2H8V2zm3-1v4h2V2h1v3h1V2h1v3h1V1h-6z"/><path fill="#FFF" d="M1 5h2V2h1v3h1V1H1zM6 1v5h2V5h2V1H6zm3 3H8V2h1v2zM11 1v4h2V2h1v3h1V2h1v3h1V1z"/></svg>
        </a>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps, actions)(App)