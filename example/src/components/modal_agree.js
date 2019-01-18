import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal, { actions } from '../src/';
import Button from './button';
import './modal.css';

class ModalAgree extends Component {

  constructor(props) {
    super(props);
    
    this.handleDisagree = this.handleDisagree.bind(this);
    this.handleAgree = this.handleAgree.bind(this);
  }
    
  handleCancel() {
    this.props.hideModal('MODAL_AGREE');
  }

  handleDisagree() {
    alert('I disagree!');
    this.props.hideModal('MODAL_AGREE');
  }

  handleAgree() {
    alert('I agree!');
    this.props.hideModal('MODAL_AGREE');
  }

  render() {

    // TODO: where is level coming from and is it working properly??

    return (
      <Modal 
        level={this.props.level}
        handleClose={false} 
        handleEscape={this.handleCancel.bind(this)}>

        <div className="modal-body">
          <h3>Lorem ipsum dolor sit amet?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget velit nulla. Aenean ultrices elementum dapibus.</p>
          <div className="button-bar">
            <Button componentStyle="blue" onClick={this.handleDisagree}>Disagree</Button>
            <Button componentStyle="blue" onClick={this.handleAgree}>Agree</Button>
          </div>
        </div>

      </Modal>
    );
  }
}

export default connect(null, actions)(ModalAgree);