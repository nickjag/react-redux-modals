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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps, actions)(App)